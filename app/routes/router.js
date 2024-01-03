const express = require('express');
const { Login } = require('../controllers/loginContoller');
const { CreateOtp, VerifyOTP, CreateUser } = require('../controllers/registrationController');
const { postBooking, bookingList } = require('../controllers/bookingController');
const router = express.Router();

router.post('/login' , Login);

router.post('/createOtp' , CreateOtp);

router.post('/verify' , VerifyOTP);

router.post('/register' , CreateUser);

router.post('/bookTable' , postBooking);

router.post('/details' , bookingList);

module.exports = router;