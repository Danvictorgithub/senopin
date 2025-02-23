import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.table(this.tableName, (table) => {
      table.timestamp('email_verified_at').defaultTo(null)
    })
  }

  async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('email_verified_at')
    })
  }
}
