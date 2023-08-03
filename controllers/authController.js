const jwt = require('jsonwebtoken');
const User = require("../models/User");

const createToken = (_id)=>{
    console.log('id',_id)
    console.log('jwt secret',process.env.JWT_SECRET)
    return jwt.sign({_id}, process.env.JWT_SECRET, { expiresIn: '3d' })
}

const register = async (req, res) => {
  const { Name, Email, PhoneNumber, Password } = req.body;
  try {
    const user = await User.register(Name, Email, PhoneNumber, Password);
    //const {Name, Email, PhoneNumber}=user;
    console.log('inside register',user)
    const token = createToken(user._id);
    res.status(200).json({ Name, Email, PhoneNumber, token });
  } catch (error) {
    console.log('inside register catch',error.message)
    res.status(401).json({message:'Some error occurred.'});
  }
};

const login = async (req, res) => {
  console.log('login')
  const { Email, Password} = req.body;
  console.log(req.body)
  try {
    const user = await User.login(Email, Password);
    const {Name,PhoneNumber}=user;
    const token = createToken(user._id);
    res.status(200).json({ Name, Email, PhoneNumber, token });
  } catch (error) {
    res.status(401).json({message:'Invalid Credentials'});
  }
};

module.exports = { login, register };