'use strict';
const dbConfig = require('../src/config/database')
const {
  Sequelize,
  DataTypes,
  Model
} = require('sequelize');

const sequelize = new Sequelize(dbConfig);

class UserStatus extends Model {}

UserStatus.init({
  status: DataTypes.STRING
}, {
  sequelize,
  modelName: 'UserStatus',
});

module.exports = UserStatus;