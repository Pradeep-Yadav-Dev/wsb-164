const express=require("express")
const app=express()
require("dotenv").config()


// create middleware

// let applicationMd=(req,res,next)=>{
//     res.send("this is a application md")
//     next()
// }


// app.use(applicationMd)

////////////////////////////////// router level md
// let adminRouter=express.Router()
// let websiteRouter=express.Router()

// let onlyForAdmin=(req,res,next)=>{
//         res.send("this is a Admin ")
//         next()
// }

// adminRouter.use(onlyForAdmin)

/////////////////////////////////////////////////////////////////

// let globalError=(err,req,res,next)=>{

//     console.log(err)
// }

// // routes
// app.get("/",globalError,(req,res)=>{
//         throw new Error ("not Working....")
// })

////////////////////////////////////////////

app.get("/about", (req,res)=>{
    res.send("about")
})
app.get("/gallery",(req,res)=>{
    res.send("gallery")
})
app.get("/contact",(req,res)=>{
    res.send("contact")
})




app.listen(process.env.PORT , ()=>{
    console.log(`server on ${process.env.PORT}`)
})