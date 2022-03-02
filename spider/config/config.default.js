/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1645604114152_869';

  // add your middleware config here
  config.middleware = [ 'printdate', 'forbidip', 'auth' ];
  config.printdate = {
    aaa: 'aaaaa',
  };
  config.forbidip = {
    forbidips: [],
  };

  exports.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '127.0.0.1',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '123456',
      // 数据库名
      database: 'spiderdemo',
      debug: true,
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };
  // exports.sequelize = {
  //   dialect: 'mysql',
  //   host: '127.0.0.1',
  //   port: 3306,
  //   database: 'spiderdemo',
  //   username: 'root',
  //   password: '123456',
  //   define: {
  //     // freezeTableName默认值为false，会自动在表名后加s
  //     freezeTableName: true,
  //     // timestamps默认值为true，会自动添加create_time和update_time
  //     timestamps: false,
  //   },
  //   app: true,
  // };


  // 与cookie的配置基本一样
  config.session = {
    // maxAge: 5000,
    key: 'SESSION_ID',
    // httpOnly: true,
    encrypt: true,
    renew: true,

  };

  config.security = {
    csrf: {
      enable: false,
    }
  };


  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  exports.ejs = {};

  exports.view = {
    mapping: {
      '.html': 'ejs',
    },
  };


  // 配置公共的url
  //  http://www.phonegap100.com/appapi.php?a=getPortArticle&aid=123
  //  http://www.phonegap100.com/appapi.php?a=getPortList&catid=20&page=1

  config.api = 'https://news.baidu.com/';

  return {
    ...config,
    ...userConfig,
  };
};


