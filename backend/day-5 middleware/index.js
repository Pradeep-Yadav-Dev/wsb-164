const express=require("express")
const app=express()
require("dotenv").config()
const fs=require("fs")


let checkToken=(req,res,next)=>{
    let myToken="123@ws";
    if(myToken != req.query.usertoken){
       return  res.send("please give a valid token")
    }
    next()
    
}

let getInfo=(req,res,cb)=>{
    fs.appendFileSync("data.txt", `Page Path is ${req.url} AND Time is ${Date.now()} \n`  )
    cb()
    
}

app.use(getInfo)

app.get("/" ,(req,res)=>{
    res.send("hello home")
})
app.get("/about" ,(req,res)=>{
    res.send({name:"hello about"})
})



app.get("/gallery", checkToken, (req,res)=>{
    
    res.send("hello gallery")

})
app.get("/contact"  ,(req,res)=>{
    res.send("hello contact")
})



app.listen(process.env.PORT , ()=>{
    console.log(`server run on ${process.env.PORT}`)
})
