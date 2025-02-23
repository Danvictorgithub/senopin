import env from '#start/env'
import { inject } from '@adonisjs/core'
import { Logger } from '@adonisjs/core/logger'
import mail from '@adonisjs/mail/services/main'

@inject()
export class MailService {
  constructor(private readonly logger: Logger) {}
  async sendEmailVerification(email: string, verifyUrl: string) {
    try {
      await mail.sendLater((message) => {
        message
          .to(email)
          .from(env.get('SMTP_EMAIL', 'mailer@exampledev.com'))
          .subject('Senopin Email Verification')
          .htmlView('emails/verify-email', { email, verifyUrl })
      })
    } catch (error) {
      this.logger.error('Error sending email verification: %s', error)
    }
  }
  async sendPasswordReset(email: string, resetUrl: string) {
    await mail.sendLater((message) => {
      message
        .to(email)
        .from(env.get('SMTP_EMAIL', 'mailer@exampledev.com'))
        .subject('Senopin Password Reset')
        .htmlView('emails/password-reset', { email, resetUrl })
    })
  }
}
