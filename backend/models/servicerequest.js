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
    service_type_id: DataTypes.INTEGER,
    inventary_id: DataTypes.INTEGER,
    realty_id: DataTypes.INTEGER,
    status_id: DataTypes.INTEGER,
    contract_id: DataTypes.INTEGER,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'ServiceRequest',
  });
  ServiceRequest.belongsTo(servicetype, {
    foreignKey: 'service_type_id'
  });
  ServiceRequest.belongsTo(inventary, {
    foreignKey: 'inventary_id'
  });
  ServiceRequest.belongsTo(realty, {
    foreignKey: 'realty_id'
  });
  ServiceRequest.belongsTo(status, {
    foreignKey: 'status_id'
  });
  return ServiceRequest;
};