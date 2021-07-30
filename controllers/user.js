
const User = require('../model/userModel');

exports.getUser = (req,res,next) =>{
    res.render('add-users',{pageTitle : 'addUser'})
}




exports.postUserData = (req,res,next) =>{
    User.create({
        name : req.body.name,
        email : req.body.email,
        age : req.body.age,
        dob : req.body.dob
    })
    .then(result =>{
        console.log(result)
        res.redirect('/emp/users');
    })
    .catch(err => console.log("my error",err))
   
}


exports.getallUsers = (req, res, next) => {  
    User.findAll()
        .then(customers=>{
            console.log("getting user",customers)
            res.render('allUsers',{
                userDetails : customers,
                pageTitle : 'all users',
            })  
        })
        .catch(err => console.log("hye",err))
  
}



exports.getUserDetails = (req,res,next) =>{
    const userId = req.params.userId;
    User.findUserById(userId)
            .then(([val])=>{
                res.render('user-details',{
                    userDetails : val[0],
                    pageTitle : userId+' userDetails',
                });
            })
            .catch(err=>console.log(err));
  
}

const allFavUsers = [];
exports.myfavusers = (req,res,next) => {
    const selectedUser = User.findUserById(req.body.userId)
    allFavUsers.push(selectedUser)
    res.render('favUsers',
    {
        users : allFavUsers,
        pageTitle : 'fav Users'
    });
}