const http=require("http")
const port=5000
const fs=require("fs") 



// if(fs.existsSync("upload")){
//     console.log("upload folder exsist")
// }
// else{
//     fs.mkdirSync("upload")
// }

if(!fs.existsSync("upload")){
    fs.mkdirSync("upload")
}

if(!fs.existsSync("upload/ws.txt")){
    fs.writeFileSync("upload/ws.txt","hello class")
}


if(!fs.existsSync("upload/pradeep.txt")){
    fs.writeFileSync("upload/pradeep.txt","hello class pradeep")
}

if(!fs.existsSync("upload/home.html")){
    fs.writeFileSync("upload/home.html","<b> hello rj </b>")
}

const server=http.createServer((req,res)=>{
   
    if(req.url=="/"){
        res.end("this home page")
    }
    else if(req.url=="/about"){
        res.end("this is a about page")
    }
    else if(req.url=="/gallery"){
        res.end("this is a gallery page")
    }
    else{
        res.end("404")
    }
})

server.listen(port ,()=>{
    console.log(`server run on ${port}`)
})
