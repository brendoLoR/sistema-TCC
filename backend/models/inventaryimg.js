'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InventaryImg extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  InventaryImg.init({
    img_path: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'InventaryImg',
  });
  return InventaryImg;
};