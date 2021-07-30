const path = require('path');
const express = require('express');
const route = express.Router();
const admin = require("./admin")

const controllerProduct = require('../controllers/product')


route.get('/shop',controllerProduct.getProducts);

module.exports = route;