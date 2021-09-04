'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RealtyLuxuryLevel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  RealtyLuxuryLevel.init({
    level: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'RealtyLuxuryLevel',
  });
  return RealtyLuxuryLevel;
};