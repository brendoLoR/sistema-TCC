'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NFE extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  NFE.init({
    invoiceId: DataTypes.INTEGER,
    contractId: DataTypes.INTEGER,
    paymentId: DataTypes.INTEGER,
    nfeKey: DataTypes.STRING,
    danfeNumber: DataTypes.STRING,
    details: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'NFE',
  });
  return NFE;
};