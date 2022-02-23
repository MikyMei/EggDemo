'use strict';

const Service = require('egg').Service;


// egg是一个mvc框架
/*
* MVC : 一种开发模式
* view 视图模板 页面的展示
* controller 控制器 负责处理一些业务逻辑
* model 模型（service）：和数据打交道（查询数据库， 请求数据）
*
*
*
* */
class UserService extends Service {
  async getUserInfo() {
    // 获取新闻数据


    return {
      name: '治丧三',
      age: 20,
    };

  }
}

module.exports = UserService;
