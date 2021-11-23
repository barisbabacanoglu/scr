import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UserPhotos extends BaseSchema {
  protected tableName = 'user_photos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('user_photo_id')
      table.string('url')
      table.enum('gender', ['male','female','unisex'])

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
