
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user')

router.get('/add-user',userController.getUser)

router.use('/getusers',userController.postUserData);

router.get('/users',userController.getallUsers);

router.get('/userDetails/:userId',userController.getUserDetails)

router.post('/favUser',userController.myfavusers)

module.exports = router;