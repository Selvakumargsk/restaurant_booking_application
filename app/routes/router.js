const express = require('express');
const { Login } = require('../controllers/loginContoller');
const { CreateOtp, VerifyOTP, CreateUser, getUsers } = require('../controllers/registrationController');
const { postBooking, bookingList } = require('../controllers/bookingController');
const { PostProducts, GetProductList } = require('../controllers/productController');
const router = express.Router();

router.get('/getProduct' , GetProductList);

router.post('/getUser' , getUsers);

router.post('/login' , Login);

router.post('/createOtp' , CreateOtp);

router.post('/verify' , VerifyOTP);

router.post('/register' , CreateUser);

router.post('/bookTable' , postBooking);

router.post('/details' , bookingList);

router.post('/postproduct' , PostProducts);

module.exports = router;