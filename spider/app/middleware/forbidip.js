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

  return async function forbidip(ctx, next) {


    // 要屏蔽的ip ：1从数据库获取， 2，从参数传入

    const forbidip = options.forbidips;


    const sourceIp = ctx.request.ip;
    console.log('请求的555IP地址', sourceIp, forbidip, forbidip.includes(sourceIp));
    // await next();

    if (forbidip.includes(sourceIp)) {
      ctx.status = 403;
      ctx.body = '你已经被屏蔽';

    } else {
      await next();

    }
  };

};
