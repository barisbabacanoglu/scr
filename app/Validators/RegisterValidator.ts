import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class RegisterValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    email: schema.string({}, [
      rules.email(),
      rules.required(),
      rules.unique({ table: 'users', column: 'email' }),
    ]),
    company_name: schema.string( {}, [
      rules.required()
    ]),

  })

  public messages = {
    'email.string': 'Email field should be string',
    'email.email': 'Email field should be email format',
    'email.required': 'Email field is required',
    'email.unique': 'Email should be unique',

    'company_name.number': 'Company name should be string',
    'company_name.required': 'Company name is required'
  }
}
