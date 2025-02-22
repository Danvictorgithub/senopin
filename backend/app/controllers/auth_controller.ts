import User from '#models/user'
import { loginValidator } from '#validators/auth'
import type { HttpContext } from '@adonisjs/core/http'
import UsersController from './users_controller.js'
import { inject } from '@adonisjs/core'

@inject()
export default class AuthController {
  constructor(private readonly usersController: UsersController) {}
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
      response.badRequest({ message: 'Invalid Credentials' })
    }
  }
  async signup(ctx: HttpContext) {
    return this.usersController.store(ctx)
  }
  async logout({ auth }: HttpContext) {
    const user = auth.getUserOrFail()
    User.accessTokens.delete(user, user.currentAccessToken.identifier)
    return {
      message: 'Logged out successfully',
    }
  }
}
