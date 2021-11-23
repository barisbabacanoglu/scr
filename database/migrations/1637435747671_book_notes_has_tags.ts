import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class BookNotesHasTags extends BaseSchema {
  protected tableName = 'book_notes_has_tags'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('book_note_has_tag_id')
      table.integer('book_id')
      table.integer('book_tag_id')
      table.integer('book_note_id')

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
