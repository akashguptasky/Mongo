const express = require('express');
const router = express.Router();
// const UserModel= require("../models/bookModel.js")
const fbUserModel = require('../models/fbUserModel')
const fbController= require('../controllers/fbController')

//create user
router.post('/createFbUser', fbController.createUser);

//get all records
router.get('/getFbUsers', fbController.getUsers) 


module.exports = router;