const Aderess = require('../models/aderess');

module.exports = {
    async store(req, res) {
        const {
            cep,
            district,
            city,
            country,
            street,
            uf
        } = req.body
        
        const aderess = await Aderess.create({
            cep,
            district,
            city,
            country,
            street,
            uf
        })
        res.send(aderess);
    },
    async store(req) {
        const {
            cep,
            district,
            city,
            country,
            street,
            uf
        } = req
        
        const aderess = await Aderess.create({
            cep,
            district,
            city,
            country,
            street,
            uf
        })
        return aderess.id;
    },
    async get(req, res) {
        const {
            id
        } = req.body
        const aderess = await Aderess.findByPk(id);
        res.send(aderess);
    },

}