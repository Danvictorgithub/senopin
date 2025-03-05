import User from '#models/user'
import { HashHelperService } from '#services/hash_helper_service'
import { MailService } from '#services/mail_service'
import {
  createPasswordResetValidator,
  resetPasswordValidator,
  verifyEmailValidator,
  verifyPasswordValidator,
} from '#validators/email'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import { DateTime } from 'luxon'

@inject()
export default class EmailsController {
  constructor(
    private readonly hashHelperService: HashHelperService,
    private readonly mailService: MailService
  ) {}
  async sendEmailVerification({ auth }: HttpContext) {
    const user = auth.getUserOrFail()
    if (user.emailVerifiedAt) {
      return { message: 'Email already verified' }
    }
    const signedUrl = this.hashHelperService.generateSignedUrl(
      '/api/email/verify-email',
      user.id,
      user.email,
      60
    )
    await this.mailService.sendEmailVerification(user.email, signedUrl)
    return { message: 'Email verification sent' }
  }

  async verifyEmail({ request, response }: HttpContext) {
    const data = { ...request.all(), ...request.params() }
    const { hash, expires, userId, signature } = await request.validateUsing(verifyEmailValidator, {
      data,
    })
    const user = await User.findOrFail(userId)
    if (user.emailVerifiedAt) {
      response.abort({ message: 'Email already verified' })
    }
    const isValid = this.hashHelperService.validateSignedUrl(
      userId,
      user.email,
      expires,
      hash,
      signature
    )
    if (!isValid) {
      response.abort({ message: 'Invalid or Expired email verification link' })
    }
    user.emailVerifiedAt = DateTime.now()
    await user.save()
    return { message: 'Email verified' }
  }

  async sendPasswordReset({ request }: HttpContext) {
    const { email } = await request.validateUsing(createPasswordResetValidator)
    const user = await User.findBy('email', email)
    if (!user) {
      return { message: 'Password reset link sent' }
    }
    const { link: signedUrl, expires } = this.hashHelperService.generateSignedUrlPasswordReset(
      '/api/email/reset-password',
      user.id,
      user.email,
      60
    )
    user.passwordResetAt = DateTime.fromSeconds(expires)
    await user.save()
    await this.mailService.sendPasswordReset(user.email, signedUrl)
    return { message: 'Password reset link sent' }
  }

  async verifyResetPassword({ request, response }: HttpContext) {
    const data = { ...request.all(), ...request.params() }
    const { hash, expires, userId, signature } = await request.validateUsing(
      verifyPasswordValidator,
      {
        data,
      }
    )
    const user = await User.findOrFail(userId)
    const isValid = this.hashHelperService.validateSignedUrl(
      userId,
      user.email,
      expires,
      hash,
      signature
    )
    if (!isValid) {
      response.abort({ message: 'Invalid or Expired password reset link' })
    }
    return { message: 'Password reset link is valid', email: user.email }
  }

  async resetPassword({ request, response }: HttpContext) {
    const data = { ...request.all(), ...request.params() }
    const { hash, expires, userId, signature, password } = await request.validateUsing(
      resetPasswordValidator,
      { data }
    )
    const user = await User.findOrFail(userId)
    const isValid = this.hashHelperService.validateSignedUrl(
      userId,
      user.email,
      expires,
      hash,
      signature
    )
    if (!isValid) {
      return response.badRequest({ message: 'Invalid or Expired password reset link' })
    }
    // Convert expires (timestamp) to Luxon DateTime
    const expiresAt = DateTime.fromSeconds(expires)
    // Ensure reset link hasn't been used before expiration
    if (user.passwordResetAt && user.passwordResetAt.toMillis() > expiresAt.toMillis()) {
      return response.badRequest({ message: 'Reset link has already been used or expired' })
    }
    // Update password and set `passwordResetAt`
    user.password = password
    user.passwordResetAt = expiresAt.plus({ seconds: 1 }) // Prevents multiple resets
    await user.save()
    return { message: 'Password reset successful' }
  }
}
