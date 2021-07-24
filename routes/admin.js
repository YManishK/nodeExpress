const path = require('path');
const express = require('express');

const router = express.Router()

const controllerProduct = require('../controllers/product')



router.get('/add-product',controllerProduct.getAllProducts);
 
router.use('/product',controllerProduct.postAddProduct);

 module.exports = router;

// exports.router = router;
// exports.products = products;