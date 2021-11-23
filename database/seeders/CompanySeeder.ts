import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Company from 'App/Models/Company'

export default class CompanySeederSeeder extends BaseSeeder {
  public async run () {
    await Company.create({
      name: "Iceberg Digital",
      owner_user_id: 1,
    });
  }
}
