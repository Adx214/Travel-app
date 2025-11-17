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
const cors = require("cors")
const morgan = require("morgan")

app.use(morgan("dev"))
dotenv.config()
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api",mrouter)
app.use("/userapi",urouter)
app.use('/uploads', express.static('uploads'));
app.get("/",(req,res)=>{
    res.send("Hello WOrld")
})
const PORT = process.env.port||3000

app.listen(PORT,()=>{
    console.log(`app is running in ${PORT}`)
})