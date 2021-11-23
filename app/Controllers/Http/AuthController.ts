// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from 'App/Models/User'
import Ws from 'App/Controllers/Ws'
import RegisterValidator from 'App/Validators/RegisterValidator'
import Company from 'App/Models/Company'

export default class AuthController {
  public async loginForm({ view }) {
    return view.render('auth.login')
  }
  public async registerForm({ view }) {
    return view.render('auth.register')
  }

  public async login({ auth, request, response }) {
    const email = request.input('email')
    const password = request.input('password')

    try {
      await auth.use('web').attempt(email, password)
      Ws.io.emit('login', { logged_in_user: auth.user.email })
      response.redirect('/users')
    } catch (err){
      return response.badRequest('Invalid credentials', err)
    }
  }

  public async register({ request, response }) {

    try {
      await request.validate(RegisterValidator)

      let user = await User.create({
        user_type_id: 1,
        name: request.input('name'),
        username: request.input('username'),
        email: request.input('email'),
        password: request.input('password'),
      });
      console.log('user_calisti')

      if (user) {

        await Company.create({
          name: request.input('company_name'),
          owner_user_id: user.user_id
        });
        console.log('company_calisti')
      }

      return response.redirect('/auth/login')

    } catch (e) {
      response.badRequest(e.messages)
    }
  }

  public async logout({  auth, view }) {
    auth.logout();
    return view.render('auth/login')
  }
}
