const express=require("express")
const app=express()
const port=5400
const fs=require("fs")
const path=require("path")

// console.log(path.join(__dirname , "upload"))

app.use(express.static(path.join(__dirname , "upload")))

if(!fs.existsSync("upload")){
    fs.mkdirSync("upload")
}


app.get("/" ,(req,res)=>{

    res.sendFile(path.join(__dirname , "upload" ,"home.html" ))
})

app.get("/about",(req,res)=>{
    // res.send("about page")
    res.sendFile(path.join(__dirname , "upload" ,"about.html" ))
})


app.get("/gallery",(req,res)=>{
    // res.send("gallery page")
    res.sendFile(path.join(__dirname , "upload" ,"gallery.html" ))
})


// catch all routes
app.use((req,res)=>{
    res.send("404")
})


app.listen(port ,()=>{
    console.log(`server run on ${port}`)
})
