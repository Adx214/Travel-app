const mongoose = require ('mongoose')
require('dotenv').config()
const conn = mongoose.connect(process.env.db_url).then(()=>{
    console.log('====================================');
    console.log(" DataBase is connected");
    console.log('====================================');
}).catch((err)=>{
    console.log(err);
    
})
module.exports = conn