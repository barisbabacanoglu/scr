// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ScrumController {
  public async poker({ view }) {
    return view.render('scrum.poker')
  }
}
