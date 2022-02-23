/**

 * @author MikyMei

 * @date 2021-10-09 16:46

 */


'use strict';

const Controller = require('egg').Controller;


class NewsController extends Controller {
  async index() {
    const { ctx } = this;


    console.log(this.config.api);
    const msg = 'ejs';
    const list = [ '111111', '22222222222', '33333333' ];
    await ctx.render('news', {
      mag: msg,
      user: {
        name: '王二',
        age: 5555,
      },
    });
  }

  async content() {
    // 获取get传值
    // koa中如何获取get 传值  ctx.query
    const { ctx } = this;
    const query = ctx.query;
    console.log(query);
    ctx.body = '新闻详情';
  }

  async list() {
    // 获取动态路由
    const { ctx } = this;
    const query = ctx.params;
    console.log('IP地址参数', query);
    ctx.body = '新闻列表';
  }


  async newList() {
    this.ctx.body = '新闻列表(动态路由)';
  }

}

module.exports = NewsController;
