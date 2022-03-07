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
  config.keys = appInfo.name + '_1633765426904_9988';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // 配置模板引擎
  exports.view = {
    mapping: {
      '.html': 'ejs',  // 模板文件后缀名，用ejs来解析
    },
  };


  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    database: 'spiderdemo',
    username: 'root',
    password: '123456',
    debug: true,
  };

  config.passportLocal = {
    usernameField: 'MikyMei##',
    passwordField: '68c532399b770851de1e4c317c4d0ac6',
  };

  config.api = 'http://www.itying.com/api';
  // config.api = 'http://localhost/555';

  return {
    ...config,
    ...userConfig,
  };
};
