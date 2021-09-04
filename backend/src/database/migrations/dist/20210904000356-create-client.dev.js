'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return regeneratorRuntime.async(function up$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(queryInterface.createTable('clients', {
              id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
              },
              name: {
                type: Sequelize.STRING
              },
              sex: {
                type: Sequelize.STRING
              },
              phone: {
                type: Sequelize.STRING,
                unique: true
              },
              birthday: {
                type: Sequelize.STRING
              },
              details: {
                type: Sequelize.STRING
              },
              aderess_id: {
                type: Sequelize.INTEGER,
                references: {
                  model: 'Aderesses',
                  // Name of the created table
                  key: 'id',
                  onUpdate: 'CASCADE',
                  onDelete: 'CASCADE'
                }
              },
              user_id: {
                type: Sequelize.INTEGER,
                references: {
                  model: 'Users',
                  // Name of the created table
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
            return regeneratorRuntime.awrap(queryInterface.dropTable('clients'));

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    });
  }
};