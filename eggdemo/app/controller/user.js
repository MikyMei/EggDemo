/**

 * @author MikyMei

 * @date 2022-03-07 15:44

 */

'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {

    const { ctx, app } = this;
    console.log("查看",app.model.UserModel);

    return;


  }

}


module.exports = UserController;
