const express = require('express');
const router = express.Router();
const controller = require('../controllers/categorieController')

router.get('/categories', controller.getAll)

router.get('/categories/:id', controller.getById)

module.exports = router