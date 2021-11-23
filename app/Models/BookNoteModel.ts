import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class BookNoteModel extends BaseModel {
  static get table () {
    return 'book_notes'
  }

  @column({ isPrimary: true })
  public book_note_id: number

  @column({  })
  public book_id: number

  @column({  })
  public note: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

}
