'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ServiceEvolutionImg extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ServiceEvolutionImg.init({
    service_evolutionId: DataTypes.INTEGER,
    imgPath: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ServiceEvolutionImg',
  });
  return ServiceEvolutionImg;
};