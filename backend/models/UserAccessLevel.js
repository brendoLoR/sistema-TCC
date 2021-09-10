'use strict';
const dbConfig = require('../src/config/database')
const {
  Sequelize,
  DataTypes,
  Model
} = require('sequelize');
const sequelize = new Sequelize(dbConfig);

class UserAccessLevel extends Model {}

UserAccessLevel.init({
  accessLevel: Sequelize.STRING
}, {
  sequelize,
  modelName: 'UserAccessesLevel',
});

module.exports = UserAccessLevel;