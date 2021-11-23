import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class BookTagModel extends BaseModel {
  static get table () {
    return 'book_tags'
  }

  @column({ isPrimary: true })
  public book_tag_id: number

  @column({  })
  public name: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
