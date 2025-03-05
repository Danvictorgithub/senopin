import UserRegistered from '#events/user_registered'
import User from '#models/user'
import { createUserValidator } from '#validators/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return User.all()
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createUserValidator)
    const emailCheck = await User.findBy('email', payload.email)
    if (emailCheck) {
      return response.badRequest({ message: 'Email already exists' })
    }
    const usernameCheck = await User.findBy('username', payload.username)
    if (usernameCheck) {
      return response.badRequest({ message: 'Username already exists' })
    }
    const newUser = await User.create(payload)
    UserRegistered.dispatch(newUser)
    return newUser
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    return User.findOrFail(params.id)
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {
    const user = await User.findOrFail(params.id)
    const payload = await request.validateUsing(createUserValidator)
    user.merge(payload).save()
    return user
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    const user = await User.findOrFail(params.id)
    user.delete()
    return user
  }
}
