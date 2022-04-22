const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController')

router.post('/registrer', controller.postUser)

router.post('/login', controller.getUser)

module.exports = router