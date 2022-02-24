/**

 * @author MikyMei

 * @date 2022-02-24 15:28

 */


/**
 * 外部可以通过this.app.foo()来调用
 * */

module.exports = {
  foo(param) {
    // this 就是 app 对象，在其中可以调用 app 上的其他方法，或访问属性
    // console.log('++++', this);

    return this.config.api;
  },
};
