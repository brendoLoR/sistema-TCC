const express = require('express');
const UserAccessLevelController = require('../controllers/UserAccessLevelController');
const UserController = require('../controllers/UserController');
const UserStatusController = require('../controllers/UserStatusController');
const ClientController = require('../controllers/ClientController');

const routes = express.Router();

routes.post('/new_user', UserController.store);
routes.post('/new_userAccess', UserAccessLevelController.store);
routes.post('/new_userStatus', UserStatusController.store);
routes.post('/login', UserController.loginCheck);
routes.post('/create_user', ClientController.store);


module.exports = routes; 