'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.addColumn(
      'Users', 'token', {
        type: Sequelize.STRING
      })]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.dropColumn('Users', 'token')]);
  }
};