const express = require('express');
const { Login } = require('../controllers/loginContoller');
const { CreateOtp, VerifyOTP, CreateUser } = require('../controllers/registrationController');
const router = express.Router();

router.post('/login' , Login);

router.post('/createOtp' , CreateOtp);

router.post('/verify' , VerifyOTP);

router.post('/register' , CreateUser);

module.exports = router;