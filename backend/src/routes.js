const express = require('express');
const UserContoller = require('../controllers/UserController');

const routes = express.Router();

routes.post('/new', UserContoller.store)

module.exports = routes; 