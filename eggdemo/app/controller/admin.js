/**

 * @author MikyMei

 * @date 2021-10-09 16:05

 */

'use strict';

const Controller = require('egg').Controller;


class AdminController extends Controller {
  async index() {
    // egg 基于koa
    const { ctx } = this;
    ctx.body = 'admin， hi, egg';
  }

}

module.exports = AdminController;
