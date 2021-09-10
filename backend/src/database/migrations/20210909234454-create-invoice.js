'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Invoices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      contractId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Contracts', // Name of the created table
          key: 'id'
        },
        allowNull: false
      },
      baseDate: {
        type: Sequelize.DATE
      },
      value: {
        type: Sequelize.FLOAT
      },
      rebate: {
        type: Sequelize.FLOAT
      },
      validity: {
        type: Sequelize.DATE
      },
      latePaymentInterest: {
        type: Sequelize.FLOAT
      },
      latePaymentTolerance: {
        type: Sequelize.FLOAT
      },
      paidAt: {
        type: Sequelize.DATE
      },
      paymentId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Payments', // Name of the created table
          key: 'id'
        },
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
    await queryInterface.dropTable('Invoices');
  }
};