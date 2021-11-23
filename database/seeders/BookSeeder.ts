import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import BookModel from 'App/Models/BookModel'

export default class BookSeederSeeder extends BaseSeeder {
  public async run () {
    await BookModel.createMany([
      {
        name: 'Design Thinking',
        author: 'Emrah Kozan'
      },
      {
        name: 'Life Of Barış',
        author: 'Barış Babacanoğlu'
      }
    ]);
  }
}
