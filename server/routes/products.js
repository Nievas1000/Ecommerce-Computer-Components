const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController')

router.get('/products', controller.getAll)

router.get('/product/:id', controller.getById)

router.get('/newproducts', controller.getNews)

router.get('/prodbycat/:category', controller.getByCat)

router.get('/searchbyprice/:price1/:price2/:category', controller.getByPrice)

router.get('/searchprod/:product', controller.getBySearch)


module.exports = router

