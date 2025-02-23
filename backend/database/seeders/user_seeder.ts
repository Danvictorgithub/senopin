import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    User.createMany([
      {
        username: 'sample',
        email: 'sample@example.com',
        fullName: 'Sample User',
        password: 'password',
      },
    ])
  }
}
