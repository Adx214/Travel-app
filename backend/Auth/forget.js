const User = require("../dbconfig/schema/user")
const nodemailer = require("nodemailer")
const bcrypt = require("bcrypt")
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "arnab21505@gmail.com",
    pass: process.env.password
  },
})
const sendOTP = async (req, res) => {
  const { email } = req.body
  const user = await User.findOne({ email })
  if (!user) {
    return res.status(404).json({ message: "User not found" })
  }
  ////Generate OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString()
  const otpExpiry = Date.now() + 10 * 60 * 1000 // 10 minutes from now
  user.otp = otp
  user.otpExpire = otpExpiry
  await user.save()

  await transporter.sendMail({
    from: "arnab21505@gmail.com",
    to: user.email,
    subject: "Password Reset OTP",
    text: `Your OTP for password reset is ${otp}. It is valid for 10 minutes.`
  })
  res.json({ message: "OTP sent to your email" })
}

const verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body
    const user = await User.findOne({ email })
    if (!user) return res.status(400).json({ message: "Email not found" })
    if (user.otp !== otp) {
      return res.status(400).json({ message: "Invalid OTP" })
    }

    if (Date.now() > user.otpExpire) {
      return res.status(400).json({ message: "OTP expired" })
    }

    return res.json({ message: "OTP verified" })
  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }

}
const resetPassword = async (req, res) => {
  try {
    const {newPassword,email} = req.body
    if(!newPassword || !email){
      return res.status(400).json({message:"All fields are required"})
    }
    const u = await User.findOne({
      email
    })
    if(u){
      const p = await bcrypt.hash(newPassword,10)
      u.password = p
      await u.save()
      res.json({message:"Password reset successful"})
    }

  } catch (error) {
    console.log(error);
    
    res.status(500).json({ message: "Server error" })
    
  }
}
module.exports = { sendOTP, verifyOTP,resetPassword }