'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Aderess extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Aderess.init({
    cep: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Aderess',
  });
  return Aderess;
};