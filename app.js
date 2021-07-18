const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');
const app = express();

app.set("view engine", "ejs");
app.set("views","views");

app.use(bodyParser.urlencoded({extended : false}));

// app.use('/admin',adminRoute)
app.use('/admin',adminRoute.router)
app.use(shopRoute)

app.use((req,res)=>{
   // res.status(400).send('<h1>Page Not Found</h1>')
   // res.status(400).sendFile(path.join(__dirname,'./','views','404.html'));
    res.status(400).render('404',{pageTitle : 'Page Not Found'});
})

app.listen(3000);