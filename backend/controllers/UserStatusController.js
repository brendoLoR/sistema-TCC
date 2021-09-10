const UserStatus = require('../models/UserStatus');

module.exports = {
    async store(req, res) {
        const {
            status
        } = req.body
        
        const userStatus = await UserStatus.create({
            status
        })
        res.send(userStatus);
    },
    async get(req, res) {
        const {
            id
        } = req.body
        
        const userStatus = await UserStatus.findByPk(id);

        res.send(userStatus);
    },

}