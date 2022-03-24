const Realty = require('../models/realty')
const RealtyType = require('../models/realtytype')

describe('realty test', () => {
    it('create and delete a realty type', async() => {
        const realtyType = await RealtyType.create({
            type: "tipo 1"
        })
        expect(realtyType).toBeInstanceOf(RealtyType)
        const deletedRows = await RealtyType.destroy({
            where: {
                id: realtyType.id
            }
        })
        expect(deletedRows).toBe(1)
    })
});