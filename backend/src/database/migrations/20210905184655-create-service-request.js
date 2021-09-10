'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ServiceRequests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      serviceTypeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'ServiceTypes', // Name of the created table
          key: 'id'
        },
        allowNull: false
      },
      inventaryId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Inventaries', // Name of the created table
          key: 'id'
        },
        allowNull: false
      },
      realtyId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Realties', // Name of the created table
          key: 'id'
        },
        allowNull: false
      },
      statusId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'ServiceStatuses', // Name of the created table
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
      description: {
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
    await queryInterface.dropTable('ServiceRequests');
  }
};