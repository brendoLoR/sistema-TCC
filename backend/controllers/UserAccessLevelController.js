const UserAccessLevel = require('../models/UserAccessLevel');

module.exports = {
    async store(req, res) {
        const {
            accessLevel
        } = req.body

        const userAccessLevel = await UserAccessLevel.create({
            accessLevel
        })
        res.send(userAccessLevel);
    },
    async get(req, res) {
        const {
            id
        } = req.body

        const userAccessLevel = await UserAccessLevel.findByPk(id);

        res.send(userAccessLevel);
    },

}