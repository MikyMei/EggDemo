/**

 * @author MikyMei

 * @date 2022-02-23 17:15

 */


'use strict';

const Service = require('egg').Service;

class SpiderService extends Service {

  async findAll() {
    const result = await this.ctx.model.SpiderEgg.find();
    return result;
  }

  async findOne() {
    const result = await this.ctx.model.SpiderEgg.findOne();
    return result;
  }

  async insert(data) {
    const result = await this.ctx.model.SpiderEgg.create(data);
    return result;
  }

  async update(data) {
    const result = await this.ctx.model.SpiderEgg.updateMany({ id: data.id }, { '$set': { ...data } });
    return result;
  }

  async delete(data) {
    const result = await this.ctx.model.SpiderEgg.deleteOne({ id: data.id });
    return result;
  }


}

module.exports = SpiderService;
