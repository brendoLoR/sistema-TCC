const express = require('express');
const UserAccessLevelController = require('../controllers/UserAccessLevelController');
const UserContoller = require('../controllers/UserController');
const UserStatusController = require('../controllers/UserStatusController');

const routes = express.Router();

routes.post('/new_user', UserContoller.store);
routes.post('/new_userAccess', UserAccessLevelController.store);
routes.post('/new_userStatus', UserStatusController.store);
routes.post('/new_user', UserContoller.store);

module.exports = routes; 