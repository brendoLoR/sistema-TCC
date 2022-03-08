const Adderess = require('../models/adderess');

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
        
        const adderess = await Adderess.create({
            cep,
            district,
            city,
            country,
            street,
            uf
        })
        res.send(adderess);
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
        
        const adderess = await Adderess.create({
            cep,
            district,
            city,
            country,
            street,
            uf
        })
        return adderess.id;
    },
    async get(req, res) {
        const {
            id
        } = req.body
        const adderess = await Adderess.findByPk(id);
        res.send(adderess);
    },

}