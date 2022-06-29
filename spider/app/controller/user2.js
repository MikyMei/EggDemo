/**

 * @author MikyMei

 * @date 2022-03-02 10:19

 */

/**
 *
 * 查看本地desketop

 * @author MikyMei

 * @date 2022-02-23 16:23

 */

'use strict';

const Controller = require('egg').Controller;

class User2Controller extends Controller {


  /**
   * 直接 get http://127.0.0.1:7001/user2
   *
   * */
  async index() {

    const { ctx, app } = this;
    // const res = await app.mysql.select('users',
    //   {
    //     where: { name: 'miky' },
    //     columns: [ 'id', 'age', 'name' ],
    //
    //   });


    const data = ctx.request.body;
    console.log('data', data);


    const result = await this.service.spiderEgg.insert(data);


    // const res = await app.mysql.get('users');
    // const res = await app.mysql.count('users', { age: 150 });
    // const res = await app.mysql.query('INSERT INTO users (name, age) VALUES(?, ?)', [ data.name, data.age ]);
    ctx.body = result;
  }


  async new() {
    console.log('new');
  }

  async show() {
    console.log('show');
  }

  async edit() {
  }


  /**
   * PUT http://127.0.0.1:7001/user2/10
   * */
  async update() {
    const { ctx, app } = this;

    const data = ctx.request.body;
    console.log('更新', ctx.params.id);

    const opts = {
      where: {
        age: 24,
      },
    };
    const row = {
      // id: ctx.params.id,
      name: data.name,
      age: data.age,
    };

    const res = await app.mysql.update('users', row, opts);
    ctx.body = res;
  }


  /**
   * DELETE http://127.0.0.1:7001/user2/10
   * */
  async destroy() {

    const { ctx, app } = this;
    const { id } = ctx.params;
    const data = ctx.request.body;
    console.log('删除参数', id);
    const res = await app.mysql.delete('users', data);
    ctx.body = res;
  }


  async create() {

    const { ctx, app } = this;

    const data = ctx.request.body;
    console.log('请求数据', ctx);

    const requesTdata = {
      name: data.name,
      age: data.age,
    };

    const res = await app.mysql.insert('users', requesTdata);
    ctx.body = res;

  }


}

module.exports = User2Controller;
