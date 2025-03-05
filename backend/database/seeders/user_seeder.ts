import Profile from '#models/profile'
import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  async run() {
    const user = await User.create({
      username: 'sample',
      email: 'sample@example.com',
      password: 'password',
    })
    const userProfile = await Profile.create({
      fullName: 'Sample User',
      birthDate: DateTime.local(2000, 1, 1),
      userId: user.id,
    })
  }
}
