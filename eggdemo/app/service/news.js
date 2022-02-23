'use strict';

const Service = require('egg').Service;


// egg是一个mvc框架
/*
*
* 服务继承Service为了方便egg在this上面绑定以下的方法：
*
* this.ctx :当前请求的上下文context对象的实例，通过它，我们可以拿到框架封装好的处理当前请求的
* this.app: 当前应用Application 对象的实例，通过它我们可以拿到框架提供的全局队形和方法
* this.service: 应用定义的Service 通过它我们可以访问到其他业务层，等价于 this.ctx.service
* this.config: 应用运行时的配置项
* this.logger: logger 对象，上面有四个方法（debug， info， warn， error），分别代表打印四个不同
*
* 服务的命名规则
* Service文件必须放在app/service目录，可以支持多级目录，访问的时候可以通过目录名级联访问
*
* app/service/biz/user.js=>ctx.service.biz.user
* app/service/sync_user.js=>ctx.service.syncUser
* app/service/HackerNews.js=>ctx.service.hackerNews
*
*
* */
class NewsService extends Service {
  async getNewsList() {
    // 获取新闻数据
    const list = [ '111111', '222222', '3333' ];
    const mag = '132456';

    // 在服务里面调用服务的数据

    const user = await this.service.user.getUserInfo();

    console.log("获取数据",user);

    return mag;

  }
}

module.exports = NewsService;
