/**

 * @author MikyMei

 * @date 2022-02-24 15:58

 */

/**
 * 外部可以通过 this.ctx.request访问
 */

// app/extend/request.js
module.exports = {
  foo() {
    console.log(this);

    return this.header.host;
  },
};
