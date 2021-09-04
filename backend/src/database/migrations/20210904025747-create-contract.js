'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Contracts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      realty_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Realties', // Name of the created table
          key: 'id'
        }
      },
      renter_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Renters', // Name of the created table
          key: 'id'
        }
      },
      client_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Clients', // Name of the created table
          key: 'id'
        }
      },
      details: {
        type: Sequelize.TEXT
      },
      validity: {
        type: Sequelize.DATE,
        allowNull: false
      },
      initial_value: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      ajustment_value: {
        type: Sequelize.FLOAT
      },
      ajustment_value_period: {
        type: Sequelize.FLOAT
      },
      base_payment: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      pay_day: {
        type: Sequelize.DATE,
        allowNull: false
      },
      contract_type_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'ContractTypes', // Name of the created table
          key: 'id'
        }
      },
      signed_contractor_at: {
        type: Sequelize.DATE
      },
      signed_contracted_at: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Contracts');
  }
};