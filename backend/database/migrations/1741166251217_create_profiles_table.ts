import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'profiles'

  async up() {
    this.schema.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().defaultTo(this.raw('uuid_generate_v4()'))
      table.integer('user_id').references('id').inTable('users').onDelete('CASCADE')
      table.string('full_name').nullable()
      table.string('image').nullable()
      table.date('birth_date').nullable()
      table.string('bio').nullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
    this.schema.raw('DROP EXTENSION IF EXISTS "uuid-ossp"')
  }
}
