import userModel from "../models/userModel.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from 'validator'


// login user
export const loginUser = async (req, res) => {

}


const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}

//register user
export const registerUser = async (req, res) => {

    const { name, password, email } = req.body;
    
    try {
        //checking if user already exists
        const exists = await userModel.findOne({email});
        if(exists){
            return res.json({success: false, message: "User already exists"})
        }

        //validating email correct and strong password
        if(!validator.isEmail(email)){
            return res.json({success: false, message: "Please enter a valid email"})
        }

        if(password.length < 8){
            return res.json({success: false, message: "Please enter a strong password"})
        }
        
        //hasing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        
        const newuser = new userModel({
            name: name,
            password: hashedPassword,
            email: email
        })

        const user = await newuser.save()
        const token = createToken(user._id)

        res.json({success:true, token});

    } catch (error) {
        console.log(error)
        res.json({success: false, message: "Error"})
    }
}

export default {loginUser, registerUser};