const express = require('express');
const UserAccessLevelController = require('../controllers/UserAccessLevelController');
const UserController = require('../controllers/UserController');
const UserStatusController = require('../controllers/UserStatusController');
const ClientController = require('../controllers/ClientController');
const RenterController = require('../controllers/RenterController');

const routes = express.Router();

routes.post('/new_user', UserController.store);
routes.post('/login', UserController.loginCheck);
routes.post('/create_client', ClientController.store);
routes.post('/create_renter', RenterController.store);


module.exports = routes; 