const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) =>{
    return res.json({estou:'aqui'});
})

module.exports = routes;