import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import UserType from 'App/Models/UserType'

export default class UserTypeSeeder extends BaseSeeder {
  public async run () {
    await UserType.createMany([
      {
        user_type_id: 1,
        name: 'Admin',
      },
      {
        user_type_id: 2,
        name: 'Product Owner',
      },
      {
        user_type_id: 3,
        name: 'Scrum Master',
      },
      {
        user_type_id: 4,
        name: 'Product Owner',
      }
    ])
  }
}
