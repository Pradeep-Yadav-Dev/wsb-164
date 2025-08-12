const express =require("express")
const app=express()
const port=5600
const mongoose=require("mongoose")
const multer=require("multer")
const upload=multer()

mongoose.connect('mongodb://127.0.0.1:27017/wsb-164')
.then(()=>{
    console.log("Db connected. 👍")
})
.catch(()=>{
     console.log("Db connection error. 😑")
})

const formSchema=new mongoose.Schema({
    name:String,
    mobile:Number,
    email:String,
    password:String
})

const FormModel=mongoose.model("user",formSchema)

app.post("/form-insert",upload.none(), async(req,res)=>{
    try{
       
        let data= new FormModel(req.body)
        await data.save()

        res.status(200).json({message:"form data insert successfully" ,data})
    }
    catch(error){
        console.error(error)
        res.status(500).json({message:"Internal Server Error"})
    }
})

app.get("/form-view", async(req,res)=>{
    try{
        
        let data=await FormModel.find()
        res.status(200).json({message:"form data view successfully",data })
    }
    catch(error){
        console.error(error)
        res.status(500).json({message:"Internal Server Error"})
    }
})





app.listen(port,()=>{
    console.log(`server run on 5600`)
})