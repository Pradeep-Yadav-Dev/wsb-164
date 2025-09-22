const express=require("express")

const multer=require("multer")
const { loginAdmin, viewProfile } = require("../../controller/admin/profileController")
const authMiddleware = require("../../middleware/authMiddleware")
const upload=multer()

const profileAuthRouter=express.Router()


profileAuthRouter.post("/login",upload.none(),loginAdmin)
profileAuthRouter.get("/view-profile",  authMiddleware ,viewProfile)



module.exports=profileAuthRouter