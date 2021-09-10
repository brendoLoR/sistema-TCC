'use strict';
const Client = require('./client');
const Realty = require('./realty');
const Renter = require('./renter');
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
    realtyId: DataTypes.INTEGER,
    renterId: DataTypes.INTEGER,
    clientId: DataTypes.INTEGER,
    details: DataTypes.TEXT,
    validity: DataTypes.DATE,
    initialValue: DataTypes.FLOAT,
    ajustmentValue: DataTypes.FLOAT,
    ajustmentValuePeriod: DataTypes.FLOAT,
    base_payment: DataTypes.FLOAT,
    payDay: DataTypes.DATE,
    contract_typeId: DataTypes.INTEGER,
    signedContractorAt: DataTypes.DATE,
    signedContractedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Contract',
  });
  Contract.belongsTo(Realty, {
    foreignKey: 'realtyId'
  });
  Contract.belongsTo(Renter, {
    foreignKey: 'renterId'
  });
  Contract.belongsTo(Client, {
    foreignKey: 'clientId'
  });
  return Contract;
};