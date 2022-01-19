'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('UserAccessesLevels', [{
      accessLevel: 'admin',
      updatedAt: new Date(),
      createdAt: new Date()
    }, {
      accessLevel: 'menager',
      updatedAt: new Date(),
      createdAt: new Date()
    }, {
      accessLevel: 'renter',
      updatedAt: new Date(),
      createdAt: new Date()
    }, {
      accessLevel: 'client',
      updatedAt: new Date(),
      createdAt: new Date()
    }, {
      accessLevel: 'guest',
      updatedAt: new Date(),
      createdAt: new Date()
    }], {});

  },

  down: async (queryInterface, Sequelize) => {

  }
};
