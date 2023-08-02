const { checkout, getKey, paymentVarification }= require('../controllers/paymentController');
const requireAuth=require('../middlewares/requireAuth');

const express=require('express')

const router=express.Router();

// router.use(requireAuth);

router.post('/checkout', checkout)

router.get('/getkey', getKey);

router.post('/paymentverification', paymentVarification)

module.exports=router