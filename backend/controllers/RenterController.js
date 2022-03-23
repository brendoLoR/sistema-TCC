const Renter = require('../models/renter');
const Aderess = require('./AdderessController');
const User = require('./UserController');

module.exports = {
    async store(req, res) {
        try {
            const {
                name,
                cnpj,
                phone,
                details,
                birthday,
                aderessData,
                userId,
                token
            } = req.body
            const token_s = await User.getToken(userId)
            if (token === token_s) {
                const aderessId = await Aderess.store(aderessData)

                const renter = await Renter.create({
                    name,
                    cnpj,
                    phone,
                    details,
                    birthday,
                    aderessId,
                    userId
                })
                res.send(renter);
            } else {
                throw new TypeError('invalid section')
            }
        } catch (error) {
            error.message != null ? res.send(error.stack) : res.send(error);
        }
    },
    async get(req, res) {
        const {
            id
        } = req.body
        const client = await Client.findByPk(id);
        res.send(client);
    },

}