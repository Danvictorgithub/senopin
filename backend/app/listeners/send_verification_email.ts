import UserRegistered from '#events/user_registered'
import { HashHelperService } from '#services/hash_helper_service'
import { MailService } from '#services/mail_service'
import { inject } from '@adonisjs/core'
import { Logger } from '@adonisjs/core/logger'

@inject()
export default class SendVerificationEmail {
  constructor(
    private readonly mailService: MailService,
    private readonly hashHelperService: HashHelperService,
    private readonly logger: Logger
  ) {}
  async handle(userRegistered: UserRegistered) {
    const user = userRegistered.user
    const signedUrl = this.hashHelperService.generateSignedUrl(
      '/api/email/verify-email',
      user.id,
      user.email,
      60
    )
    await this.mailService.sendEmailVerification(user.email, signedUrl)
    this.logger.info('Email verification sent')
  }
}
