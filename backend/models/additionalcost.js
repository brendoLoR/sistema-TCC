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
    typeId: DataTypes.INTEGER,
    contractId: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    value: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'AdditionalCost',
  });
  AdditionalCost.belongsTo(CostType, {
    foreignKey: {
      foreignKey: 'typeId',
      type: DataTypes.INTEGER
    }
  });
  AdditionalCost.belongsTo(Contract, {
    foreignKey: {
      foreignKey: 'contractId',
      type: DataTypes.INTEGER
    }
  });
  return AdditionalCost;
};