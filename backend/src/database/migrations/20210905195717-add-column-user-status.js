'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.addColumn(
      'Users', 'userStatusId', {
        type: Sequelize.INTEGER,
        references: {
          model: 'UserStatuses', // Name of the created table
          key: 'id'
        },
        allowNull: false
      })]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.dropColumn('Users', 'userStatusId')]);
  }
};