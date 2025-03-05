import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('full_name')
      table.dropColumn('birth_date')
      table.dropColumn('image')
    })
  }

  async down() {
    this.schema.table(this.tableName, (table) => {
      table.string('full_name').nullable()
      table.string('image').nullable()
      table.date('birth_date').nullable()
    })
  }
}
