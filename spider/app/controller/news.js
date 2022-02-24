/**

 * @author MikyMei

 * @date 2022-02-23 16:23

 */

'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {

    // 获取数据显示到新闻页面

    const list = await this.service.news.getNewsList();

    await this.ctx.render('news', {
      list: list,
    });
  }


  async content() {
    // 获取get传值

    const aid = this.ctx.query.aid;

    console.log(aid);
    const list = await this.service.news.getNewsCotent(aid);
    console.log(list);

    await this.ctx.render('newscontent', {
      list: list,
    });


  }
}

module.exports = NewsController;
