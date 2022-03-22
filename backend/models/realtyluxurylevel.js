'use strict';
const dbConfig = require('../src/config/database')

const {
    Sequelize,
    DataTypes,
    Model,
} = require('sequelize');

const sequelize = new Sequelize(dbConfig);

const renter = require("./renter")

class RealtyLuxuryLevel extends Model {}

RealtyLuxuryLevel.associate = function(models) {
    RealtyLuxuryLevel.belongsTo(models.renter, {
        as: 'renterId'
    });
    return renter.id;
}
RealtyLuxuryLevel.init({
    level: Sequelize.STRING,
    valueMultiplier: Sequelize.FLOAT,
    renterId: Sequelize.INTEGER
}, {
    sequelize,
    modelName: 'RealtyLuxuryLevel',
});

module.exports = RealtyLuxuryLevel;