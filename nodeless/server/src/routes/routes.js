const express = require('express');
const router = express.Router();
const userController = require('../controllers/getUserController');

router.get('/user',  userController.validateParams,  userController.getUser);

module.exports = router;
