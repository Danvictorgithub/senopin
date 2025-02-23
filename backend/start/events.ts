import UserRegistered from '#events/user_registered'
import UserResetPassword from '#events/user_reset_password'
import emitter from '@adonisjs/core/services/emitter'

const SendVerificationEmail = () => import('#listeners/send_verification_email')
const SendPasswordReset = () => import('#listeners/send_password_reset')
emitter.on(UserRegistered, [SendVerificationEmail])
emitter.on(UserResetPassword, [SendPasswordReset])
