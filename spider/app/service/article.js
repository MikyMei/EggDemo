/**

 * @author MikyMei

 * @date 2022-02-23 17:15

 */


'use strict';

const Service = require('egg').Service;

class ArticleService extends Service {

  async getAll() {
    this.ctx.model.Article.find();
  }


}

module.exports = ArticleService;
