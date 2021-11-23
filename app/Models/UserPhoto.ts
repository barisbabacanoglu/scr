import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class UserPhoto extends BaseModel {
  @column({ isPrimary: true })
  public user_photo_id: number

  @column({  })
  public url: string

  @column({  })
  public gender: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
