'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  // async index() {
  //   const { ctx } = this;
  //   // ctx.body = 'hi, egg';
  //
  //   //  调用extend中扩展的application
  //   console.log(this.app.foo());
  //   console.log(this.ctx.getHost());
  //   // console.log(this.request.getHost());
  //   console.log(this.ctx.request.foo());
  //
  //   await ctx.render('index');
  //
  //
  //   //  http://www.phonegap100.com/appapi.php?a=getPortArticle&aid=123
  //   //  http://www.phonegap100.com/appapi.php?a=getPortList&catid=20&page=1
  // }


  async index() {

    /*
    * cookie：
    * 1.可以实现同一个浏览器访问同一个域的时候，不同页面之间的数据共享
    * 2，实现数据持久化，（关闭浏览器重新打开以后数据还在）
    * 3，默认情况下，cookies在浏览器关闭后就会被销毁
    * 4，默认情况下，egg.js里面的cookies中无法设置中文
    * 5，在加密之后就可以设置中文，用的时候再揭密
    * 6，使用buffer将中文转换成base64字符串，存进去，使用的时候在使用JSON.parse
    *
    * */

    this.ctx.cookies.set('username', '往往', {
      maxAge: 1000 * 3600 * 24, // cookie存储一天
      httpOnly: true,
      signed: true, // 防止用户修改
      encrypt: true,  // 是否对cookies进行加密，加密了之后，获取的时候需要解密

    });

    this.ctx.session.username = '张三';

    await this.ctx.render('home')
    ;
  }

  async add() {
    console.log('请求数据', this.ctx.request.body);
    this.ctx.body = this.ctx.request.body;
  }

  async loginOut() {
    this.ctx.cookies.set('username', null);
    this.ctx.redirect('/news'); // 路由跳转
  }
}

module.exports = HomeController;
