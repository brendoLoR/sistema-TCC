const { Model } = require('sequelize/types');
const Realty = require('../models/realty')
const RealtyType = require('../models/realtytype')

describe('email validation test', () => {
    it('create a realty type', () => {
        const realtyType = await RealtyType.create({
            type: "tipo 1"
        })
        expect(realtyType).toBe(typeof(Model))
    })
});