/**

 * @author MikyMei

 * @date 2022-03-04 15:57

 */


'use strict';

const Service = require('egg').Service;

class AuthorizationService extends Service {

  async insert(data) {
    const result = await this.ctx.model.Authorization.create(data);
    return result;
  }
}

module.exports = AuthorizationService;
