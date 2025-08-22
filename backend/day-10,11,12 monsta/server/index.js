const express=require("express")
const db = require("./src/db/db_config")
const { adminRouter } = require("./src/routes/app")
const app=express()
const cors=require("cors")
require("dotenv").config()
const path=require("path")

db()
app.use(cors())
app.use(express.json())
app.use("/uploads" , express.static(path.join(__dirname , "uploads")) )

app.use("/admin",adminRouter)

app.listen(process.env.PORT,()=>{
    console.log(`server run on ${process.env.PORT}`)
})



