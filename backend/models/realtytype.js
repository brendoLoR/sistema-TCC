'use strict';
const dbConfig = require('../src/config/database')

const {
    Sequelize,
    DataTypes,
    Model,
} = require('sequelize');

const sequelize = new Sequelize(dbConfig);

const renter = require("./renter")

class RealtyType extends Model {}

RealtyType.associate = function(models) {
    RealtyType.belongsTo(models.renter, {
        as: 'renterId'
    });
    return renter.id;
}

RealtyType.init({
    type: Sequelize.STRING,
    renterId: Sequelize.INTEGER
}, {
    sequelize,
    modelName: 'RealtyType',
});

module.exports = RealtyType;