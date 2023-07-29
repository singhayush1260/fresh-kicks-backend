const mongoose=require('mongoose')

const connectDB= async (MONGO_URI)=>{
mongoose.connect(MONGO_URI).then(()=>{
    console.log('Connected to MongoDB database.')
})
}
module.exports=connectDB;