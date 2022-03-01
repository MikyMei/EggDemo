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


  // 与cookie的配置基本一样
  config.session = {
    // maxAge: 5000,
    key: 'SESSION_ID',
    // httpOnly: true,
    encrypt: true,
    renew: true,

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
