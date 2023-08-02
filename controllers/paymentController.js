const razorpay_instance = require("../config/razorpay_instance");
const Payment = require("../models/Payment");
const crypto = require("crypto");
const { config } = require("dotenv");
config({ path: "../.env" });

const checkout = async (req, res) => {
  console.log("checkout",req.body);
  const options = {
    amount: Number(req.body.amount * 100),
    currency: "INR",
  };
  const order = await razorpay_instance.orders.create(options);
  console.log(order);
  res.status(200).json({
    success: true,
    order,
  });
  console.log(order);
};

const getKey = (req, res) => {
  console.log('get key')
  const key = process.env.RAZORPAY_API_KEY;
  res.status(200).json({ key });
};

const paymentVarification = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  const key = process.env.RAZORPAY_API_SECRET;
  
  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", key)
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
    await Payment.create({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    });

    res.redirect(`http://localhost:5173/paymentsuccessful?reference=${razorpay_payment_id}`);
  } 
  else{
    res.status(400).json({ success: false });
  }
};

module.exports = { checkout, getKey, paymentVarification };
