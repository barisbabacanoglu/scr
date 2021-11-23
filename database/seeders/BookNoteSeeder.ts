import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import BookNoteModel from 'App/Models/BookNoteModel'

export default class BookNoteSeederSeeder extends BaseSeeder {
  public async run () {
    await BookNoteModel.createMany([
      {
        book_id: 1,
        note: 'Hissedilen problem, yeterince keşfedildiği ve anlaşıldığı zaman, insan istemsiz olarak bundan rahatsız olur ve çözüm aramaya başlar'
      },
      {
        book_id: 1,
        note: 'Kişi beş duyusu ile bir konuya odaklandığında ve işbirliği yapıp çevresindeki diğer insanlarla birlikte çalıştığında, elindeki işin başarısız olma ihtimalini neredeyse sıfıra indirecektir'
      }
    ]);
  }
}
