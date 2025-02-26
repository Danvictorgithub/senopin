import UserRegistered from '#events/user_registered'
import User from '#models/user'
import { createUserValidator } from '#validators/user'
import { cuid } from '@adonisjs/core/helpers'
import type { HttpContext } from '@adonisjs/core/http'
import drive from '@adonisjs/drive/services/main'
import { readFileSync, rm } from 'node:fs'

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
    const { image, ...rest } = await request.validateUsing(createUserValidator)
    const emailCheck = await User.findBy('email', rest.email)
    if (emailCheck) {
      return response.badRequest({ message: 'Email already exists' })
    }
    const usernameCheck = await User.findBy('username', rest.username)
    if (usernameCheck) {
      return response.badRequest({ message: 'Username already exists' })
    }
    const filename = `${cuid()}.${image.extname}`
    await drive.use().put(filename, readFileSync(image.tmpPath as string))
    rm(image.tmpPath as string, (err) => {
      if (err) {
        response.abort({ message: 'Error deleting file' })
      }
    })
    const imageUrl = await drive.use().getUrl(filename)
    const userObj = { ...rest, image: imageUrl }
    const newUser = await User.create(userObj)
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
