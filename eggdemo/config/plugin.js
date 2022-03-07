'use strict';

/** @type Egg.EggPlugin */


exports.ejs = {
  enable: true,
  package: 'egg-view-ejs',
};


exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};


exports.passport = {
  enable: true,
  package: 'egg-passport',
};

exports.passportLocal = {
  enable: true,
  package: 'egg-passport-local',
};
