const express = require('express');
const router = express.Router();
const controller = require('../controllers/categorieController')

router.get('/categories', controller.getAll)

module.exports = router