const express = require("express")
const app = express()
const dotenv = require("dotenv")
dotenv.config()

app.get("/",(req,res)=>{
    res.send("Hello WOrld")
})
const PORT = process.env.port||3000

app.listen(PORT,()=>{
    console.log(`app is runnint in ${PORT}`)
})