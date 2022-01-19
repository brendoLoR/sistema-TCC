'use strict';
const dbConfig = require('../src/config/database')
const {
  Sequelize,
  DataTypes,
  Model
} = require('sequelize');

const sequelize = new Sequelize(dbConfig);


class Aderess extends Model {}

Aderess.init({
  cep: Sequelize.STRING,
  city: Sequelize.STRING,
  district: Sequelize.STRING,
  country: Sequelize.STRING,
  street: Sequelize.STRING,
  uf: Sequelize.STRING,
}, {
  sequelize,
  modelName: 'Aderess',
});

module.exports = Aderess;