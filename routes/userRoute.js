const express = require('express');
const { loginController, registerController } = require('../controllers/userController');

// creating routing object 
const router=express.Router();
 
// routers
//POST routes for LOGIN USERS
router.post('/login' , loginController) 

// POST route for REGISTER USER
router.post('/register', registerController)



module.exports=router