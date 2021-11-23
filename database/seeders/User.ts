import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run () {
    await User.createMany([
      {
        company_id: 1,
        user_type_id: 3,
        user_photo_id: 1,
        name: 'Baris Babacanoglu',
        username: 'barisbabacanoglu',
        email: 'baris@babacanoglu.com',
        password: 'baris123',
      },
      {
        company_id: 1,
        user_type_id: 4,
        user_photo_id: 2,
        name: 'Arda Doğan',
        username: 'ardadogan',
        email: 'arda@babacanoglu.com',
        password: 'arda123',
      }
    ])
  }
}
