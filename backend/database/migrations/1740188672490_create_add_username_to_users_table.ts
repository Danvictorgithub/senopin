import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.table(this.tableName, (table) => {
      table.string('username').unique().notNullable().after('email')
    })
  }

  async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('username')
    })
  }
}
