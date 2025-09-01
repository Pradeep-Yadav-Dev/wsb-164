const express=require("express")

const multer=require("multer")
const { loginAdmin } = require("../../controller/admin/profileController")
const upload=multer()

const profileAuthRouter=express.Router()


profileAuthRouter.post("/login",upload.none(),loginAdmin)



module.exports=profileAuthRouter