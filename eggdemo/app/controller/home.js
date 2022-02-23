'use strict';

const Controller = require('egg').Controller;


// egg是一个mvc框架
/*
* MVC : 一种开发模式
* view 视图模板 页面的展示
* controller 控制器 负责处理一些业务逻辑
* model 模型（service）：和数据打交道（查询数据库， 请求数据）
* 更适合团队开发、业务逻辑清晰、有利于开发和维护
* egg.controller,会有下面几个属性挂在this上
*
* this.ctx: 当前请求的上下文Context 对象的实力，通过它我们可以拿到框架封装好的处理当前请求的各位
* this.app: 当前应用的application 对象的实例，通过它我们可以拿到框架提供的全局对象和方法
* this.service: 应用定义的Service，通过它我们可以访问到抽象的业务层，等价于this.ctx.service
* this.config: 应用运行时的配置项
* this.logger: logger 对象，上面有四个方法（debug， info， warn， error）, 分别代表打印四个不同级别
*
*
* */
class HomeController extends Controller {
  async index() {


    const mag = await this.service.news.getNewsList();
    const test = await this.service.syncUser.echo();


    const user = await this.service.user.getUserInfo();

    // const syncUser= await this.service.Sync_userService.echo();
    await this.ctx.render('news', {
      mag,
      user: user,
    });
  }
}

module.exports = HomeController;
