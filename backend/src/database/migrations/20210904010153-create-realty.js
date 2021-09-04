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
      saling_value: {
        type: Sequelize.FLOAT
      },
      rent_value: {
        type: Sequelize.FLOAT
      },
      qtd_bedrooms: {
        type: Sequelize.INTEGER
      },
      qtd_wc: {
        type: Sequelize.INTEGER
      },
      realty_type_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'RealtyTypes', // Name of the created table
          key: 'id'
        }
      },
      luxury_level_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'RealtyLuxuryLevels', // Name of the created table
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