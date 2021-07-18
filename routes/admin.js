const path = require('path');
const express = require('express');

const router = express.Router()

const products = [];

router.get('/add-product',(req, res, next)=>{
    // res.send('<form action="/admin/product" method="POST"><input class="form-control" type="text" name="title"><button type="submit">Add</button></form>');
    //   res.sendFile(path.join(__dirname,'../','views','add-product.html'));
     res.render("add-Product",{pageTitle : "add-Product"});
 });
 
 
router.use('/product',(req, res, next)=>{
    products.push({name : req.body.product})
    res.redirect('/shop');
 });

// module.exports = router;

exports.router = router;
exports.products = products;