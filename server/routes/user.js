const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');

router.post('/registrer', controller.postUser);

router.post('/login', controller.getUser);

router.get('/login',controller.authUser);

module.exports = router