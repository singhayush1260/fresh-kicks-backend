const express=require('express')
require('dotenv').config();
const cors=require('cors')
const connectDB=require('./data/connect_db');
const paymentRoutes=require('./routes/paymentRoutes');


const PORT= process.env.PORT || 3000;


const app=express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api',paymentRoutes);

connectDB('mongodb://127.0.0.1:27017/fresh_kicks');

app.listen(PORT,()=>{
    console.log(`Server started at PORT ${PORT}`)
})