'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Invoice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Invoice.init({
    contractId: DataTypes.INTEGER,
    baseDate: DataTypes.DATE,
    value: DataTypes.FLOAT,
    rebate: DataTypes.FLOAT,
    validity: DataTypes.DATE,
    latePaymentInterest: DataTypes.FLOAT,
    latePaymentTolerance: DataTypes.FLOAT,
    paidAt: DataTypes.DATE,
    paymentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Invoice',
  });
  return Invoice;
};