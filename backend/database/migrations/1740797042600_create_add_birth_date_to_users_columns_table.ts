import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.table(this.tableName, (table) => {
      table.date('birth_date').after('username').nullable()
    })
  }

  async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('birth_date')
    })
  }
}
