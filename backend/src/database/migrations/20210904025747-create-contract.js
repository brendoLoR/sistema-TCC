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
      realtyId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Realties', // Name of the created table
          key: 'id'
        }
      },
      renterId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Renters', // Name of the created table
          key: 'id'
        }
      },
      clientId: {
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
      initialValue: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      ajustmentValue: {
        type: Sequelize.FLOAT
      },
      ajustmentValuePeriod: {
        type: Sequelize.FLOAT
      },
      basePayment: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      payDay: {
        type: Sequelize.DATE,
        allowNull: false
      },
      contractTypeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'ContractTypes', // Name of the created table
          key: 'id'
        }
      },
      signedContractorAt: {
        type: Sequelize.DATE
      },
      signedContractedAt: {
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