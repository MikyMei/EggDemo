'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/news', controller.news.index);
  router.get('/newsContent', controller.news.content);
  router.get('/newsList/:id', controller.news.list);  // 动摇路由
  router.get('/newscList/:id', controller.news.newList);
  router.get('/admin', controller.admin.index);
};
