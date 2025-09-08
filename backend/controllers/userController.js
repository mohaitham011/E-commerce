import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const createToken = (id) =>{
  return jwt.sign({id},process.env.JWT_SECRET)
}
// Route for user login
const loginUser = async (req, res) => {
  try {
    const {email,password} = req.body;
    const user = await userModel.findOne({email});
    if (!user) {
      return res.json({msg:"user is not exist"})
    }

    const isMatch = await bcrypt.compare(password,user.password);
    if (isMatch) {
      const token = createToken(user._id);
      return res.json({success:true,token})
    }else{
      return res.json({msg:"Invalid Credintials"})
    }
  } catch (error) {
    console.log(error.message);
  }
};

// Route for user register
const registerUser = async (req, res) => {
  try {
    const {name,email,password} = req.body;
    // check email is exists
    const exist = await userModel.findOne({email})

    if(exist) {
      return res.json({success:false,msg:"User is already exist"})
    }

    if (!validator.isEmail(email)) {
      return res.json({success:false,msg:"pleade enter a valid email"})
    }

    if (password.length < 8) {
      return res.json({success:false,msg:"please enter strong password"})
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    const newUser = new userModel({
      name,
      email,
      password:hashedPassword
    });

    const user = await newUser.save();
    const token = createToken(user._id);
    return res.json({success:true,token})

  } catch (error) {
    console.log(error);
    res.json({success:false,msg:error.message})
  }
};

// Route for admin login
const adminLogin = async (req, res) => {
  try {
    const {email,password} = req.body;
    if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
      const token = jwt.sign(email+password,process.env.JWT_SECRET);
      res.json({success:true,token})
    }else{
      res.json({success:false,msg:"Invalid Credintials"})
    }
  } catch (error) {
    console.log(error);
    res.json({success:false,msg:error.message})
  }
};

export { loginUser, registerUser, adminLogin };
