'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // ctx.body = 'hi, egg';

    //  调用extend中扩展的application
    console.log(this.app.foo());
    console.log(this.ctx.getHost());
    // console.log(this.request.getHost());
    console.log(this.ctx.request.foo());

    await ctx.render('index');


    //  http://www.phonegap100.com/appapi.php?a=getPortArticle&aid=123
    //  http://www.phonegap100.com/appapi.php?a=getPortList&catid=20&page=1
  }
}

module.exports = HomeController;
