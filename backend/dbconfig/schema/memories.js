const mongoose = require("mongoose")
const memoriesSchema = new mongoose.Schema({
    title:{
        type : String,
        required : true
    },
    description:{
        type : String,
        required : true
    },
    imageUrl:{
        type : String,
        required : true
    },
    date:{
        type : Date,
        default : Date.now
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',   
        required : true
    }
})
module.exports = mongoose.model('memories', memoriesSchema)
