'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/add', controller.home.add);
  router.get('/news', controller.news.index);
  router.get('/loginOut', controller.home.loginOut);
  router.get('/newscontent', controller.news.content);
  router.resources('user2', '/user2', controller.user2);
};
