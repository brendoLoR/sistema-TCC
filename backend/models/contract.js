'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contract extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Contract.init({
    realty_id: DataTypes.INTEGER,
    renter_id: DataTypes.INTEGER,
    client_id: DataTypes.INTEGER,
    details: DataTypes.TEXT,
    validity: DataTypes.DATE,
    initial_value: DataTypes.FLOAT,
    ajustment_value: DataTypes.FLOAT,
    ajustment_value_period: DataTypes.FLOAT,
    base_payment: DataTypes.FLOAT,
    pay_day: DataTypes.DATE,
    contract_type_id: DataTypes.INTEGER,
    signed_contractor_at: DataTypes.DATE,
    signed_contracted_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Contract',
  });
  return Contract;
};