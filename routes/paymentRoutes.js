const { checkout, getKey, paymentVarification }= require('../controllers/paymentController');

const express=require('express')

const router=express.Router();

router.post('/checkout', checkout)

router.get('/getkey', getKey);

router.post('/paymentverification', paymentVarification)

module.exports=router