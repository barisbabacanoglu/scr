import BookNoteModel from 'App/Models/BookNoteModel'
import BookTagModel from 'App/Models/BookTagModel'
import BookNoteHasTagModel from 'App/Models/BookNoteHasTagModel'

export default class BookCreateService {
  note
  data

  public async boot(data) {
    this.data = data;
    await this.createNote()
    await this.createTags()
  }

  public async createNote() {
    this.note = await BookNoteModel.create({
      book_id: this.data.book_id,
      note: this.data.note,
    })
  }

  public async createTags() {

    for (let tag_name of this.data.tags) {
      tag_name = tag_name.trim()
      const tag = await BookTagModel.firstOrCreate({
        name: tag_name
      });
      if (tag) {
        await BookNoteHasTagModel.create({
          book_id: this.data.book_id,
          book_tag_id: tag.book_tag_id,
          book_note_id: this.note.book_note_id,
        });
      }
    }

  }
}
