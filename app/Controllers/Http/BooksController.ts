// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import BookModel from 'App/Models/BookModel'

import BookCreateService from 'App/Services/BookCreateService'

export default class BooksController {
  public async index({ view }) {
    const books = await BookModel.query().orderBy('book_id')
    return view.render('books.index', {
      books: books
    })
  }
  public async notes({ view, params }) {
    const book = await BookModel.query().where('book_id', params.book_id).first()
    await book?.load('notes');
    if (!params.view_type) {
      params.view_type = 'all'
    }
    return view.render('books.'+params.view_type, {
      book: book,
      view_type: params.view_type
    })
  }
  public async createNote({request, params}) {
    const data = {
      book_id: params.book_id,
      note: request.input('note'),
      tags: request.input('indexes'),
    };
    const service = new BookCreateService();
    const note = service.boot(data);

    return note;
  }
}
