/**

 * @author MikyMei

 * @date 2022-02-23 17:15

 */


'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async getNewsList() {

    //
    // const user = await  this.app.mysql.get('aaa', { id: 1 });
    // console.log(user);
    // 通过抓取接口返回数据
    // curl的方法可以获得远程的数据

    const api = this.config.api + 'widget?id=LocalNews&ajax=json&t=1645671920970';
    const response = await this.ctx.curl(api);

    const data = JSON.parse(response.data); // 把buffer类型转换成对象

    console.log(data.data.LocalNews.data);


    return 'getNewsList';

  }

  async getNewsCotent(aid) {

    const api = this.config.api + 'widget?id=LocalNews&ajax=json&t=1645671920970';
    const response = await this.ctx.curl(api);

    const data = JSON.parse(response.data);
    console.log(data);

    return data.data.LocalNews.data.rows.first[0];


  }

  /**
   * 测试操作数据库
   * */


}

module.exports = NewsService;
