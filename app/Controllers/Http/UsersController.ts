// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'


export default class UsersController {
  public async index({ view }) {
    return view.render('users.index')
  }

  public async show({ params }) {
    return 'user index: '+params.user_id
  }

  public async create() {
    return 'user create'
  }
}
