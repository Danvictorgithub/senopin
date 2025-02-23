import env from '#start/env'
import { defineConfig, transports } from '@adonisjs/mail'
import { SMTPConfig } from '@adonisjs/mail/types'

const smtpConfig: SMTPConfig = {
  host: env.get('SMTP_HOST'),
  port: env.get('SMTP_PORT'),
  /**
   * Uncomment the auth block if your SMTP
   * server needs authentication
   */
  auth:
    env.get('NODE_ENV') === 'development'
      ? undefined
      : {
          type: 'login',
          user: env.get('SMTP_USERNAME') as string,
          pass: env.get('SMTP_PASSWORD') as string,
        },
}

const mailConfig = defineConfig({
  default: 'smtp',
  /**
   * The mailers object can be used to configure multiple mailers
   * each using a different transport or same transport with different
   * options.
   */
  mailers: {
    smtp: transports.smtp(smtpConfig),
  },
})

export default mailConfig

declare module '@adonisjs/mail/types' {
  export interface MailersList extends InferMailers<typeof mailConfig> {}
}
