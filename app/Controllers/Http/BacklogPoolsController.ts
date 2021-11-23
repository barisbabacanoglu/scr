// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import BacklogPool from 'App/Models/BacklogPool'

export default class BacklogPoolsController {
  public async index({ view }) {
    return view.render('backlog_pools.index')
  }

  public async getList({  }) {
    return BacklogPool.query().orderBy('sort_order')
  }
}
