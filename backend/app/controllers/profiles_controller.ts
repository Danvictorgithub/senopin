import Profile from '#models/profile'
import { createProfileValidator, updateProfileValidator } from '#validators/profile'
import { cuid } from '@adonisjs/core/helpers'
import type { HttpContext } from '@adonisjs/core/http'
import drive from '@adonisjs/drive/services/main'

export default class ProfilesController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return Profile.all()
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const validatedData = await request.validateUsing(createProfileValidator)
    const { image, ...rest } = validatedData

    // Check if user already exists
    const existingUser = await Profile.findBy('user_id', rest.user_id)
    if (existingUser) {
      return response.badRequest({ message: 'Profile already exists' })
    }

    // Prepare profile object with image URL if it exists
    let profileObj: Partial<Omit<Profile, 'id'>> = { ...rest }

    // Handle image upload
    if (image) {
      const filename = `${cuid()}.${image.extname}`
      await image.moveToDisk(filename, 's3', { moveAs: 'buffer' })
      const imageUrl = await drive.use().getUrl(filename)
      profileObj['image'] = imageUrl
    }
    // Create new profile
    const newProfile = await Profile.create(profileObj)
    return newProfile
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    return Profile.findOrFail(params.id)
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {
    const profile = await Profile.findOrFail(params.id)
    const { image, ...rest } = await request.validateUsing(updateProfileValidator)
    let profileObj: Partial<Omit<Profile, 'id'>> = { ...rest }

    // Handle image upload
    if (image) {
      const filename = `${cuid()}.${image.extname}`
      await image.moveToDisk(filename, 's3', { moveAs: 'buffer' })
      const imageUrl = await drive.use().getUrl(filename)
      profileObj['image'] = imageUrl
    }
    profile.merge(profileObj).save()
    return profile
  }

  /**
   * Handle form submission for the updating profile via authenticated user
   */
  async updateUserProfile({ request, auth, response }: HttpContext) {
    const user = auth.getUserOrFail()
    if (!user.profile) {
      return response.badRequest({ message: 'User profile not found' })
    }
    const profile = await Profile.findOrFail(user.profile.id)
    const { image, ...rest } = await request.validateUsing(updateProfileValidator)
    let profileObj: Partial<Omit<Profile, 'id'>> = { ...rest }

    // Handle image upload
    if (image) {
      const filename = `${cuid()}.${image.extname}`
      await image.moveToDisk(filename, 's3', { moveAs: 'buffer' })
      const imageUrl = await drive.use().getUrl(filename)
      profileObj['image'] = imageUrl
    }
    profile.merge(profileObj).save()
    return profile
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    const profile = await Profile.findOrFail(params.id)
    profile.delete()
    return profile
  }
}
