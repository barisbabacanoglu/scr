import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class BookNoteHasTagModel extends BaseModel {
  static get table () {
    return 'book_notes_has_tags'
  }

  @column({ isPrimary: true })
  public book_note_has_tag_id: number

  @column({  })
  public book_id: number

  @column({  })
  public book_tag_id: number

  @column({  })
  public book_note_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
