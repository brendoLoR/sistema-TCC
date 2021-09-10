'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Payments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      uuserId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users', // Name of the created table
          key: 'id'
        }
      },
      paidMethodId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'PaymentMethods', // Name of the created table
          key: 'id'
        }
      },
      paidValue: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      details: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('Payments');
  }
};