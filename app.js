const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const pageNotFoundController = require('./controllers/404-notFount');
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/users');
const shopRoute = require('./routes/shop');
const app = express();

const sequalize = require('./util/database');

app.set("view engine", "ejs");
// app.set("views","views/usersView");
// app.set("views","views");

app.set('views', [__dirname + '/views/usersView', __dirname + '/views']);

app.use(bodyParser.urlencoded({extended : false}));

// testing database connection
// db.execute('SELECT * From products')
//         .then((res)=>{
//             console.log(res[0])
//         })
//         .catch((err)=>{
//             console.log(err)
//         })

// app.use('/admin',adminRoute)
app.use('/emp',userRoutes);
app.use('/admin',adminRoutes)
app.use('/goods',shopRoute)

app.use(pageNotFoundController.pageNotFound)

sequalize.sync().then(val=>{
    // console.log(val)
    app.listen(3000);
})
.catch(err => {})

