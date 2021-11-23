import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class BacklogPool extends BaseModel {
  @column({ isPrimary: true })
  public backlog_pool_id: number

  @column({ })
  public name: string

  @column({ })
  public sort_order: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
