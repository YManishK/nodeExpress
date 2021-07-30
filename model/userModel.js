const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('customers',{
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey : true
    },
    name :{
        type : Sequelize.STRING,
    } ,
    email : {
        type : Sequelize.STRING,
    },
    age : {
        type : Sequelize.INTEGER,
    },
    dob : {
        type : Sequelize.DATEONLY,
    },
    // phone : {
    //     type : Sequelize.INTEGER,
    // }
})

module.exports = User;
// const db = require('../util/database');
// usersArr = [];

// module.exports = class User {
//     constructor(uName,uAge,dob,email){
//         this.userName = uName;
//         this.uAge = uAge;
//         this.dob = dob;
//         this.email = email;
//     }

//     saveusers(){
//        return db.execute("INSERT INTO customers (name,email,age,dob) VALUES (?,?,?,?)",
//             [this.userName,this.email,this.uAge,this.dob]
//         )
//     }


//    static fetchAllUsers(){
//        return db.execute('SELECT * FROM customers');
//     }

//     static findUserById(id){
//         return  db.execute('SELECT * FROM customers WHERE customers.idcustomers = ?',[id])
//     }

// }