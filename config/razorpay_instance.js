const { config } = require('dotenv');
const Razorpay = require('razorpay');

config({ path: "../.env" });


const razorpay_instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET
});

module.exports = razorpay_instance;
