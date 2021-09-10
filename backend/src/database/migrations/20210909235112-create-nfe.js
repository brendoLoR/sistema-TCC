'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Nves', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      invoiceId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Invoices', // Name of the created table
          key: 'id'
        },
        allowNull: false
      },
      contractId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Contracts', // Name of the created table
          key: 'id'
        },
        allowNull: false
      },
      paymentId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Payments', // Name of the created table
          key: 'id'
        },
        allowNull: false
      },
      nfeKey: {
        type: Sequelize.STRING
      },
      danfeNumber: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Nves');
  }
};