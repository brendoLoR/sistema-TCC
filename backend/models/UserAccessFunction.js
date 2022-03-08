'use strict';
const dbConfig = require('../src/config/database')
const {
  Sequelize,
  DataTypes,
  Model
} = require('sequelize');
const sequelize = new Sequelize(dbConfig);

const UserAccessesLevel = require('./UserAccessLevel');

class AccessFunction extends Model {}

AccessFunction.associate = function (models) {
  AccessFunction.belongsTo(models.userstatus, {
    as: 'AccessLevelId'
  });
  return UserAccessesLevel ;
}

AccessFunction.init({
  function: Sequelize.STRING,
  details: Sequelize.STRING
}, {
  sequelize,
  modelName: 'AccessFunctions',
});

module.exports = AccessFunction;