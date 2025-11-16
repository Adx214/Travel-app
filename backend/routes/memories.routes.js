const express = require("express")
const mrouter = express.Router()
const Memories = require("../dbconfig/schema/memories")
const User = require("../dbconfig/schema/user")
const multer = require("multer")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads') 
    },
    filename: function (req, file, cb) {
        const uniqueName = Date.now() + '-' + file.originalname
        cb(null, uniqueName)
    }
})
const upload = multer({ storage: storage })


mrouter.get("/",(req,res)=>{
    res.send("This is memeory")
})
mrouter.post("/addmemory",upload.single('image'),async(req,res)=>{
    console.log(req.body);
    
    const body = req.body
    console.log(body);
    
    if (!req.file) {
        return res.status(400).send('No file uploaded.')
    }
    const imageUrl = `/uploads/${req.file.filename}`
    const m = new Memories({
        title : body.title,
        description : body.description,
        imageUrl : imageUrl,
        date : Date.now(),
        createdBy : body.createdBy
    })
    await m.save()
    // Add the memory to the user's memories array
    const user = await User.findById(body.createdBy)
    if (user) {
        user.memories.push(m._id)
        await user.save()
        res.json({message: "Memory added successfully", memory: m})
    }
    else {
        res.status(404).json({message: "User not found"})
    }
    
})
mrouter.delete("/deletememory/:id",async(req,res)=>{
    const memoryId = req.params.id
    const memory = await Memories.findByIdAndDelete(memoryId)
    if(memory){
        // Also remove the memory reference from the user's memories array
        const user = await User.findById(memory.createdBy)
        if(user){
            user.memories = user.memories.filter(memId => memId.toString() !== memoryId)
            await user.save()
        }
        res.json({message: "Memory deleted successfully"})
    }else{
        res.status(404).json({message: "Memory not found"})
    }
})
mrouter.patch("/updatememory/:id",async(req,res)=>{
    const memoryId = req.params.id
    const body = req.body
    const memory = await Memories.findByIdAndUpdate(memoryId,body,{new:true})
    if(memory){
        res.json({message: "Memory updated successfully",memory:memory})
    }else{
        res.status(404).json({message: "Memory not found"})
    }
})


module.exports = mrouter
