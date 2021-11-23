import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import BookTagHasTagModel from 'App/Models/BookNoteHasTagModel'

export default class BookNoteHasTagSeederSeeder extends BaseSeeder {
  public async run () {
    await BookTagHasTagModel.createMany([
      {
        book_id: 1,
        book_note_id: 1,
        book_tag_id: 1,
      },
      {
        book_id: 1,
        book_note_id: 2,
        book_tag_id: 1,
      },
      {
        book_id: 1,
        book_note_id: 2,
        book_tag_id: 2,
      }
    ])
  }
}
