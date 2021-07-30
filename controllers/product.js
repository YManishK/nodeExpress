const admin = require("../routes/admin")
 const products = [];

const Product = require("../model/product");

exports.getAllProducts = (req, res, next)=>{
    // res.send('<form action="/admin/product" method="POST"><input class="form-control" type="text" name="title"><button type="submit">Add</button></form>');
    //   res.sendFile(path.join(__dirname,'../','views','add-product.html'));
    res.render("add-Product",{pageTitle : "add-Product"});
 }



 exports.postAddProduct = (req, res, next)=>{
    const product = new Product(req.body.product,req.body.price,req.body.proDescription);
    product.saveAll()
        .then(value=>{
            res.redirect('/goods/shop');       
        })
        .catch(err=>console.log("hye error",err));
   
 }


 exports.getProducts = (req, res, next) => {  
     const products = Product.fetchAll().then(([row,fieldset])=>{
        res.render('shop',{
            prods : row,
            pageTitle : 'Shop',
        })
     })
     .catch(err=> console.log(err) );
   
}