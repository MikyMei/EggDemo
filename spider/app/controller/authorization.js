/**

 * @author MikyMei

 * @date 2022-03-04 16:00

 */


'use strict';

const Controller = require('egg').Controller;

class AuthorizationController extends Controller {


  /**
   * 直接 get http://127.0.0.1:7001/authorization
   *
   * */
  async index() {
    const { ctx, app } = this;


    const data = ctx.request.body;
    console.log('data', data);
    const result = await this.service.authorization.insert(data);
    ctx.body = result;


  }

}

module.exports = AuthorizationController;
