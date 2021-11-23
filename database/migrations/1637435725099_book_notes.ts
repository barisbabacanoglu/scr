import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class BookNotes extends BaseSchema {
  protected tableName = 'book_notes'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('book_note_id')
      table.integer('book_id')
      table.string('note')

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
