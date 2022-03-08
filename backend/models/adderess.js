'use strict';
const dbConfig = require('../src/config/database')
const {
  Sequelize,
  DataTypes,
  Model
} = require('sequelize');

const sequelize = new Sequelize(dbConfig);


class Adderess extends Model {}

Adderess.init({
  cep: Sequelize.STRING,
  city: Sequelize.STRING,
  district: Sequelize.STRING,
  country: Sequelize.STRING,
  street: Sequelize.STRING,
  uf: Sequelize.STRING,
}, {
  sequelize,
  modelName: 'Adderess',
});

module.exports = Adderess;