'use strict';
const dbConfig = require('../src/config/database')
const {
    Sequelize,
    DataTypes,
    Model
} = require('sequelize');

const sequelize = new Sequelize(dbConfig);

const User = require('./user');
const Aderess = require('./aderess');

class Renter extends Model {}

Renter.associate = function(models) {
    Renter.belongsTo(models.user, {
        as: 'userId'
    });
    return User;
}
Renter.associate = function(models) {
    Renter.belongsTo(models.aderess, {
        as: 'aderessId'
    });
    return Aderess;
}

Renter.init({
    name: {
        type: Sequelize.STRING,
    },
    cnpj: {
        type: Sequelize.STRING,
        unique: true
    },
    phone: {
        type: Sequelize.STRING,
        unique: true
    },
    details: {
        type: Sequelize.STRING,
    },
    birthday: {
        type: Sequelize.DATE,
    },
    aderessId: {
        type: Sequelize.INTEGER,

    },
    userId: {
        type: Sequelize.INTEGER,

    }
}, {
    sequelize,
    modelName: 'Renter',
});


module.exports = Renter