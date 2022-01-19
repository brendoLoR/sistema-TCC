'use strict';
const dbConfig = require('../src/config/database')
const {
  Sequelize,
  DataTypes,
  Model
} = require('sequelize');

const sequelize = new Sequelize(dbConfig);

const UserAccessesLevel = require('./UserAccessLevel');
const UserStatus = require('./UserStatus');

class User extends Model {}

User.associate = function (models) {
  User.belongsTo(models.useraccesseslevel, {
    as: 'accessLevelId'
  });
  return UserStatus;
}
User.associate = function (models) {
  User.belongsTo(models.userstatus, {
    as: 'userStatusId'
  });
  return UserAccessesLevel ;
}

User.init({
  cpf: Sequelize.STRING,
  email: Sequelize.STRING,
  token: Sequelize.STRING,
  accessLevelId: Sequelize.INTEGER,
  signedTermsAt: Sequelize.DATE,
  userStatusId: Sequelize.INTEGER
}, {
  sequelize,
  modelName: 'User',
});

module.exports = User;