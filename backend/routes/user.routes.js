const urouter = require("express").Router()
const user = require("../dbconfig/schema/user")
const bcrypt = require("bcrypt")
const {sendOTP,verifyOTP,resetPassword} = require("../Auth/forget")
const multer = require("multer")
const { generateToken,authMiddleware } = require("../Auth/auth")

urouter.get("/",(req,res)=>{
    res.send("This is user route")
})

urouter.post("/register",async(req,res)=>{
    const body = req.body
    console.log(`user name is ${body.username}`);
    console.log(`user email is ${body.email}`);
    console.log(`user password is ${body.password}`);
    const u = await user.create({
        username : body.username,
        email : body.email,
        password : await bcrypt.hash(body.password,10)
    })
   
    res.send("This is user registration route")
})
urouter.patch("/update/",authMiddleware,async(req,res)=>{
    const body = req.body
    const uid = req.user.id
    const u = await user.findByIdAndUpdate(uid,body,{new:true})
    res.json(u)
})
urouter.patch("/update-password",authMiddleware,async(req,res)=>{
    const {oldPassword,newPassword} = req.body
    const uid = req.user.id
    const u = await user.findById(uid)
    if(!u){
        return res.status(404).json({message:"User not found"})
    }
    const isMatch = await bcrypt.compare(oldPassword,u.password)
    if(isMatch){
        u.password = await bcrypt.hash(newPassword,10)
        await u.save()
        res.json({message:"Password updated successfully"})
    }
})
urouter.post("/login",async(req,res)=>{
    const {username,password} = req.body
    const u = await user.findOne({username})
    if(u){
        const isMatch = await bcrypt.compare(password,u.password)
        if(isMatch){
            const token = generateToken(u)
            res.setHeader("Authorization",`Bearer ${token}`)
            res.json({message:"Login successful"})
        }else{
            res.status(401).json({message:"Invalid username or password"})
        }
    }else{
        res.status(401).json({message:"Invalid username or password"})
    }
})
urouter.get("/test",authMiddleware,(req,res)=>{
    res.json({message:"You are authenticated",user:req.user})
})

///Password Routes
urouter.post("/send-otp",sendOTP)
urouter.post("/verify-otp",verifyOTP)
urouter.post("/reset-password",resetPassword)


module.exports = urouter