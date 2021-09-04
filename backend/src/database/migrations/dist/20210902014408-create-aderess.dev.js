'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return regeneratorRuntime.async(function up$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(queryInterface.createTable('Aderesses', {
              id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
              },
              cep: {
                type: Sequelize.INTEGER
              },
              district: {
                type: Sequelize.STRING
              },
              city: {
                type: Sequelize.STRING
              },
              country: {
                type: Sequelize.STRING
              },
              street: {
                type: Sequelize.STRING
              },
              uf: {
                type: Sequelize.STRING
              },
              createdAt: {
                allowNull: false,
                type: Sequelize.DATE
              },
              updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
              }
            }));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  down: function down(queryInterface, Sequelize) {
    return regeneratorRuntime.async(function down$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(queryInterface.dropTable('Aderesses'));

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    });
  }
};