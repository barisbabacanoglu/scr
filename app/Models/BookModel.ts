import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import BookNoteModel from 'App/Models/BookNoteModel'

export default class BookModel extends BaseModel {
  static get table () {
    return 'books'
  }

  @column({ isPrimary: true })
  public book_id: number

  @column({  })
  public name: string

  @column({  })
  public author: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => BookNoteModel, {
    foreignKey: 'book_id', // defaults to userId
  })
  public notes: HasMany<typeof BookNoteModel>

}
