'use strict';
const {
  Model
} = require('sequelize');
const servicetype = require('./servicetype');
const inventary = require('./inventary');
const realty = require('./realty');
const status = require('./status');
module.exports = (sequelize, DataTypes) => {
  class ServiceRequest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ServiceRequest.init({
    serviceTypeId: DataTypes.INTEGER,
    inventaryId: DataTypes.INTEGER,
    realtyId: DataTypes.INTEGER,
    statusId: DataTypes.INTEGER,
    contractId: DataTypes.INTEGER,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'ServiceRequest',
  });
  ServiceRequest.belongsTo(servicetype, {
    foreignKey: 'serviceTypeId'
  });
  ServiceRequest.belongsTo(inventary, {
    foreignKey: 'inventaryId'
  });
  ServiceRequest.belongsTo(realty, {
    foreignKey: 'realtyId'
  });
  ServiceRequest.belongsTo(status, {
    foreignKey: 'statusId'
  });
  return ServiceRequest;
};