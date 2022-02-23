'use strict';

const Controller = require('egg').Controller;


// egg是一个mvc框架
/*
* MVC : 一种开发模式
* view 视图模板 页面的展示
* controller 控制器 负责处理一些业务逻辑
* model 模型（service）：和数据打交道（查询数据库， 请求数据）
*
*
*
* */
class HomeController extends Controller {
  async index() {

    const mag=await this.service.news.getNewsList();
    const test=await this.service.syncUser.echo();



    const user = await this.service.user.getUserInfo();
    await this.ctx.render('news', {
      mag,
      user:user,
    });
  }
}

module.exports = HomeController;
