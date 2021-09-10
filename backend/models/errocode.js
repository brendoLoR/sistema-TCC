'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ErroCode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ErroCode.init({
    uid: DataTypes.UUID,
    message: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ErroCode',
  });
  return ErroCode;
};