import { User } from "../models/userModel.js"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"

export const Login=async(req, res)=>{
    try{
        const {email, password}=req.body
        
        if(!email || !password){
            return res.status(400).json({message:"Please fill all the fields", success:false})
        }

        const user=await User.findOne({email})
        if(!user){
            return res.status(400).json({message:"User does not exist", success:false})
        }
        
        const isMatch=await bcryptjs.compare(password, user.password)
        
        if(!isMatch){
            return res.status(400).json({message:"Invalid credentials", success:false})
        }
        
        // console.log("check1");
        

        const tokenData={
            id:user._id,

        }
        const token=await jwt.sign(tokenData,"fhdgkjfshgkgsdhfjkhgf",{expiresIn:"1d"})

        // console.log("check2");
        
        return res.status(200).cookie("token", token,
            {
                httpOnly:true,
            }).json(
                {message:`Welcome back ${user.fullName}`,user, success:true}
            )
    }
    catch(err){
        console.log(err.message)
    }
}

export const Logout=async(req, res)=>{
    try{
        return res.status(200).cookie("token","",{expiresIn:new Date(Date.now()), httpOnly:true}).json(
            {message:"Logged out successfully",success:true}
        )

    }
    catch(err){
        console.log(err.message)
    }
}

export const Register=async(req, res)=>{
    try{
        const {fullName, email, password}=req.body
        if(!fullName || !email || !password){
            return res.status(400).json({message:"Please fill all the fields"})
        }
        const user=await User.findOne({email})
        if(user){
            return res.status(400).json({message:"User already exists"})
        }

        const hashedPassword=await bcryptjs.hash(password, 10)
        

        const newUser=new User({fullName, email, password:hashedPassword})
        await newUser.save()
        res.status(201).json({message:"User Account created successfully", success:true})
    }
    catch(err){
        console.log(err.message)
    }
}
