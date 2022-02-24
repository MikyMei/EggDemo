/**

 * @author MikyMei

 * @date 2022-02-24 17:07

 */


/**
 * options: 中间件的配置项， 框架会将app.config[${middlewareName}] 传递进来
 * app:当前应用的Application实例
 * */

module.exports = (options, app) => {

  // 返回一个异步的·1方法

  return async function prindate(ctx, next) {

    console.log( new Date());
    console.log("options", options);


    await next();


    // const sourceIp = ctx.request.ip;
    // const match = options.ip.some(val => {
    //   if (val == sourceIp) {
    //     return true;
    //   }
    // });
    //
    // if (match) {
    //   ctx.status = 403;
    //   ctx.message = 'Go away, Robot!';
    // } else {
    //   await next();
    // }
  };

};
