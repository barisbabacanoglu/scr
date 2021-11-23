import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import UserPhoto from 'App/Models/UserPhoto'


export default class UserPhotosSeederSeeder extends BaseSeeder {
  public async run () {
    await UserPhoto.createMany([
      {
        url: 'https://cdn4.iconfinder.com/data/icons/occupation-and-people-avatar-vol-2-1/128/man_avatar_user_old_people_senior_elderly-512.png',
        gender: 'male'
      },
      {
        url: 'https://cdn4.iconfinder.com/data/icons/occupation-and-people-avatar-vol-2-1/128/man_avatar_user_glasses_people_young_casual-512.png',
        gender: 'male'
      },
      {
        url: 'https://cdn4.iconfinder.com/data/icons/occupation-and-people-avatar-vol-2-1/128/man_avatar_freelancer_career_people_male_hipster-512.png',
        gender: 'male'
      },
      {
        url: 'https://cdn4.iconfinder.com/data/icons/occupation-and-people-avatar-vol-2-1/128/lifeguard_man_avatar_occupation_career_people_male-512.png',
        gender: 'male'
      },
      {
        url: 'https://cdn4.iconfinder.com/data/icons/occupation-and-people-avatar-vol-1-2/128/man_avatar_occupation_career_people_male_businessman-512.png',
        gender: 'male'
      },
      {
        url: 'https://cdn4.iconfinder.com/data/icons/occupation-and-people-avatar-vol-2-1/128/man_avatar_student_young_people_male_graduated-512.png',
        gender: 'male'
      },
      {
        url: 'https://cdn4.iconfinder.com/data/icons/occupation-and-people-avatar-vol-2-1/128/geisha_japanese_avatar_people_female_person_girl-512.png',
        gender: 'female'
      },
      {
        url: 'https://cdn4.iconfinder.com/data/icons/occupation-and-people-avatar-vol-3-2/128/magician_actor_man_avatar_occupation_career_people-512.png',
        gender: 'male'
      },
      {
        url: 'https://cdn4.iconfinder.com/data/icons/occupation-and-people-avatar-vol-2-1/128/fireman_man_avatar_occupation_career_people_male-512.png',
        gender: 'male'
      },
      {
        url: 'https://cdn4.iconfinder.com/data/icons/occupation-and-people-avatar-vol-2-1/128/actor_avatar_occupation_career_people_funny_clown-512.png',
        gender: 'male'
      },
      {
        url: 'https://cdn4.iconfinder.com/data/icons/occupation-and-people-avatar-vol-2-1/128/man_avatar_occupation_career_people_male_engineer-512.png',
        gender: 'male'
      }
    ]);
  }
}
