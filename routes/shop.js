const path = require('path');
const express = require('express');
const route = express.Router();
const admin = require("./admin")


route.get('/shop', (req, res, next) => {
    console.log("products From admin", admin.products)
    const allProduct = admin.products
    // res.sendFile(path.join(__dirname,'../','views','shop.html'));
    res.render('shop',{
        prods : allProduct,
        pageTitle : 'Shop',
    })
});

module.exports = route;