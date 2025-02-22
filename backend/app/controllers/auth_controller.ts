import User from '#models/user'
import { loginValidator } from '#validators/auth'
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  async me({ auth }: HttpContext) {
    return auth.getUserOrFail()
  }
  async login({ request, response }: HttpContext) {
    const payload = await request.validateUsing(loginValidator)
    if ('email' in payload) {
      const user = await User.verifyCredentials(payload.email, payload.password)
      return User.accessTokens.create(user)
    } else if ('username' in payload) {
      const user = await User.verifyCredentials(payload.username, payload.password)
      return User.accessTokens.create(user)
    } else {
      response.badRequest('Invalid Credentials')
    }
  }
  async logout({ auth }: HttpContext) {
    console.log('this is called')
    const user = auth.getUserOrFail()
    User.accessTokens.delete(user, user.currentAccessToken.identifier)
  }
  async signup(ctx: HttpContext) {}
}
