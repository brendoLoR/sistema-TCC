'use strict';
const dbConfig = require('../src/config/database')

const {
    Sequelize,
    DataTypes,
    Model,
} = require('sequelize');

const sequelize = new Sequelize(dbConfig);

const Renter = require("./renter")
const RealtyLuxuryLevel = require("./realtyluxurylevel")
const RealtyType = require("./realtytype")

class Realty extends Model {}

Realty.associate = function(models) {
    Realty.belongsTo(models.renter, {
        as: 'renterId'
    });
    return Renter.id
}
Realty.associate = function(models) {
    Realty.belongsTo(models.realtyluxurylevel, {
        as: 'luxuryLevelId'
    });
    return RealtyLuxuryLevel
}
Realty.associate = function(models) {
    Realty.belongsTo(models.renter, {
        as: 'realtyTypeId'
    });
    return RealtyType
}

Realty.init({
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
    },
    luxuryLevelId: {
        type: Sequelize.INTEGER
    },
    renterId: {
        type: Sequelize.INTEGER,
    }
}, {
    sequelize,
    modelName: 'Realty',
});