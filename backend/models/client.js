'use strict';
const dbConfig = require('../src/config/database')
const {
  Sequelize,
  DataTypes,
  Model
} = require('sequelize');

const sequelize = new Sequelize(dbConfig);

const User = require('./user');
const aderess = require('./adderess');

class Client extends Model {}

Client.associate = function (models) {
  Client.belongsTo(models.user, {
    as: 'userId'
  });
  return User ;
}
Client.associate = function (models) {
  Client.belongsTo(models.aderess, {
    as: 'aderessId'
  });
  return aderess;
}

Client.init({
  name: Sequelize.STRING,
  nickName: Sequelize.STRING,
  phone: Sequelize.STRING,
  birthday: Sequelize.DATE,
  aderessId: Sequelize.INTEGER,
  userId: Sequelize.INTEGER
}, {
  sequelize,
  modelName: 'Client',
});

module.exports = Client;