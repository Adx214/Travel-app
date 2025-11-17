const urouter = require("express").Router()
const user = require("../dbconfig/schema/user")
const bcrypt = require("bcrypt")
const {sendOTP,verifyOTP,resetPassword} = require("../Auth/forget")
const multer = require("multer")
const { generateToken,authMiddleware } = require("../Auth/auth")

urouter.get("/",(req,res)=>{
    res.send("This is user route")
})

urouter.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Create user
    const u  = await user.create({
        username : username,
        email : email,
        password : await bcrypt.hash(password,10)
    })

    res.status(200).json({ message: "User registered successfully" });

  } catch (err) {
    console.log(err);

    // 👉 Duplicate email OR username error
    if (err.code === 11000) {
      return res.status(409).json({
        message: "Email or username already exists"
      });
    }

    // Generic server error
    res.status(500).json({ message: "Server error" });
  }
});
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
    console.log(req.body);
    
    const u = await user.findOne({username})
    if(u){
        const isMatch = await bcrypt.compare(password,u.password)
        if(isMatch){
            const token = generateToken(u)
            res.setHeader("Authorization",`Bearer ${token}`)
            res.json({message:"Login successful",token:token})
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