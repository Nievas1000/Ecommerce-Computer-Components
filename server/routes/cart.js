const express = require('express');
const router = express.Router();
const controller = require('../controllers/cartController');

router.post('/add/:id', controller.addProd);

router.get('/getProds',controller.getProds);

module.exports = router