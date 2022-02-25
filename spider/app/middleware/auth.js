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

  return async function auth(ctx, next) {

    //   设置全局变量，再模板中使用

    ctx.state.csrf = ctx.csrf;
    await next();


  };

};
