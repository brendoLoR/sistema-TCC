'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('AdditionalCosts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'CostTypes', // Name of the created table
          key: 'id'
        },
        allowNull: false
      },
      contract_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Contracts', // Name of the created table
          key: 'id'
        },
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      value: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('AdditionalCosts');
  }
};