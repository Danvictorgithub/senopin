import User from '#models/user'
import { loginValidator, signupValidator } from '#validators/auth'
import type { HttpContext } from '@adonisjs/core/http'
import UsersController from './users_controller.js'
import { inject } from '@adonisjs/core'
import ProfilesController from './profiles_controller.js'
import Profile from '#models/profile'

@inject()
export default class AuthController {
  constructor(
    private readonly usersController: UsersController,
    private readonly profilesController: ProfilesController
  ) {}
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
    const { request } = ctx
    const { username, email, password, ...rest } = await request.validateUsing(signupValidator)
    const user: User | void = await this.usersController.store(ctx)
    if (user) {
      request.updateBody({ ...request.body(), user_id: user.id })
      const profile = await this.profilesController.store(ctx)
      return {
        user,
        profile,
      }
    } else {
      return {
        message: 'User not created',
      }
    }
  }
  async logout({ auth }: HttpContext) {
    const user = auth.getUserOrFail()
    User.accessTokens.delete(user, user.currentAccessToken.identifier)
    return {
      message: 'Logged out successfully',
    }
  }
}
