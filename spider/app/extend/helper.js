/**

 * @author MikyMei

 * @date 2022-02-24 16:01

 */

var sd = require('silly-datetime');


module.exports = {
  formatTime(param) {
    // this 是 helper 对象，在其中可以调用其他 helper 方法
    // this.ctx => context 对象
    // this.app => application 对象
    //  格式化日期

    const newDate = sd.format(param, 'YYYY--MM-DD HH:mm');
    return newDate;

  },

  getHelperDate() {

    return '我是helper里面的数据';
  },
};
