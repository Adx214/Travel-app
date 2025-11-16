const express = require("express")
const app = express()
const dotenv = require("dotenv")
const mrouter = require("./routes/memories.routes")
const conn = require("./dbconfig/conn/db")
const user = require("./dbconfig/schema/user")
const memories = require("./dbconfig/schema/memories")
const urouter = require("./routes/user.routes")
const bodyParser = require('body-parser')
const bcrypt = require("bcrypt")


dotenv.config()
app.use(bodyParser.json())
app.use("/api",mrouter)
app.use("/userapi",urouter)

app.get("/",(req,res)=>{
    res.send("Hello WOrld")
})
const PORT = process.env.port||3000

app.listen(PORT,()=>{
    console.log(`app is running in ${PORT}`)
})