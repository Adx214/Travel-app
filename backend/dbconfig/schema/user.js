const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    username:{
        type : String,
        required : true,
        unique : true
    },
    email:{
        type : String,
        required : true,
        unique : true
    },
    password:{
        type : String,
        required : true
    },
    bio:{
        type : String,
        default : ''
    },
    memories:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'memories'
    }],
    otp: {
        type: String,
        default: null
    },
    otpExpire: {
        type: Number,
        default: null
    }
})
module.exports = mongoose.model('users', userSchema)