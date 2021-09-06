'use strict';
const {
  Model
} = require('sequelize');
const Contract = require('./contract');
const CostType = require('./costtype');
module.exports = (sequelize, DataTypes) => {
  class AdditionalCost extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  AdditionalCost.init({
    type_id: DataTypes.INTEGER,
    contract_id: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    value: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'AdditionalCost',
  });
  AdditionalCost.belongsTo(CostType, {
    foreignKey: {
      foreignKey: 'type_id',
      type: DataTypes.INTEGER
    }
  });
  AdditionalCost.belongsTo(Contract, {
    foreignKey: {
      foreignKey: 'contract_id',
      type: DataTypes.INTEGER
    }
  });
  return AdditionalCost;
};