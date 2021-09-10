'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Realties', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      details: {
        type: Sequelize.STRING
      },
      size: {
        type: Sequelize.FLOAT
      },
      salingValue: {
        type: Sequelize.FLOAT
      },
      rentValue: {
        type: Sequelize.FLOAT
      },
      qtdBedrooms: {
        type: Sequelize.INTEGER
      },
      qtdWc: {
        type: Sequelize.INTEGER
      },
      realtyTypeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'RealtyTypes', // Name of the created table
          key: 'id'
        }
      },
      luxuryLevelId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'RealtyLuxuryLevels', // Name of the created table
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
    await queryInterface.dropTable('Realties');
  }
};