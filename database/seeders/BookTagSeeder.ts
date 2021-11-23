import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import BookTagModel from 'App/Models/BookTagModel'

export default class BookTagSeederSeeder extends BaseSeeder {
  public async run () {
    await BookTagModel.createMany([
      {
        name: "Problem"
      },
      {
        name: "Başarı"
      }
    ]);
  }
}
