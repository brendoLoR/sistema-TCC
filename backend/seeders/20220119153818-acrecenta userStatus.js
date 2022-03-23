'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('UserStatuses', [{
      status: 'able',
      updatedAt: new Date(),
      createdAt: new Date()
    }, {
      status: 'disabled',
      updatedAt: new Date(),
      createdAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
