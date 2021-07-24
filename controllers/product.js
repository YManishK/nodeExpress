const admin = require("../routes/admin")
 const products = [];

exports.getAllProducts = (req, res, next)=>{
    // res.send('<form action="/admin/product" method="POST"><input class="form-control" type="text" name="title"><button type="submit">Add</button></form>');
    //   res.sendFile(path.join(__dirname,'../','views','add-product.html'));
    res.render("add-Product",{pageTitle : "add-Product"});
 }



 exports.postAddProduct = (req, res, next)=>{
    products.push({name : req.body.product})
    res.redirect('/');
 }


 exports.getProducts = (req, res, next) => {  
    res.render('shop',{
        prods : products,
        pageTitle : 'Shop',
    })
}