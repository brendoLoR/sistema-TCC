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

class Renter extends Model {}

Renter.associate = function (models) {
  Renter.belongsTo(models.user, {
    as: 'userId'
  });
  return User ;
}
Renter.associate = function (models) {
  Renter.belongsTo(models.aderess, {
    as: 'aderessId'
  });
  return aderess;
}

Renter.init({
  name: Sequelize.STRING,
  cnpj: Sequelize.STRING,
  phone: Sequelize.STRING,
  details: Sequelize.STRING,
  birthday: Sequelize.DATE,
  aderessId: Sequelize.INTEGER,
  userId: Sequelize.INTEGER
}, {
  sequelize,
  modelName: 'Renter',
});

module.exports = Renter;