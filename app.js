const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoute = require('./routes/shop');
const app = express();

app.set("view engine", "ejs");
app.set("views","views");

app.use(bodyParser.urlencoded({extended : false}));

// app.use('/admin',adminRoute)
app.use('/admin',adminRoutes)
app.use(shopRoute)

app.use((req,res)=>{
    res.status(400).render('404',{pageTitle : 'Page Not Found'});
})

app.listen(3000);