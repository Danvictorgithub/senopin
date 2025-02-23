import UserResetPassword from '#events/user_reset_password'
import { HashHelperService } from '#services/hash_helper_service'
import { MailService } from '#services/mail_service'
import { inject } from '@adonisjs/core'
import { Logger } from '@adonisjs/core/logger'

@inject()
export default class SendPasswordReset {
  constructor(
    private readonly mailService: MailService,
    private readonly hashHelperService: HashHelperService,
    private readonly logger: Logger
  ) {}
  async handle(userResetPassword: UserResetPassword) {
    const user = userResetPassword.user
    const signedUrl = this.hashHelperService.generateSignedUrl(
      '/api/email/reset-password',
      user.id,
      user.email,
      60
    )
    await this.mailService.sendPasswordReset(user.email, signedUrl)
    this.logger.info('Password reset link sent')
  }
}
