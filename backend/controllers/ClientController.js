const Client = require('../models/client');
const Aderess = require('./AderessController');
const User = require('./UserController');

module.exports = {
    async store(req, res) {
        try {
            const {
                name,
                nickName,
                phone,
                birthday,
                aderessData,
                userId,
                token
            } = req.body
            const token_s = await User.getToken(userId)
            if (token === token_s) {
                const aderessId = await Aderess.store(aderessData)

                const client = await Client.create({
                    name,
                    nickName,
                    phone,
                    birthday,
                    aderessId,
                    userId
                })
                res.send(client);
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