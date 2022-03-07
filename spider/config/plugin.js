'use strict';

/** @type Egg.EggPlugin */


exports.ejs = {
  enable: true,
  package: 'egg-view-ejs',
};


exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};

exports.mongoose = {
  enable: true,
  package: 'egg-mongoose',
};

/**
 * 开启跨域
 * */
exports.cors = {
  enable: true,
  package: 'egg-cors',
};


/**
 * 鉴权
 * */
// config/plugin.js
exports.passport = {
  enable: true,
  package: 'egg-passport',
};

exports.passportGithub = {
  enable: true,
  package: 'egg-passport-github',
};


exports.passportLocal = {
  enable: true,
  package: 'egg-passport-local',
};

