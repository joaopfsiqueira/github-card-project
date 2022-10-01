const express = require('express');
const router = express.Router();
const userController = require('../controllers/getUserController');

router.get('/users',  userController.validateParams,  userController.getUsers);

module.exports = router;
