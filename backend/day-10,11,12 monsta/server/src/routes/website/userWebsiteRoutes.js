const express=require("express")
const { userRegister, loginUser } = require("../../controller/website/userWebsiteController")
const upload = require("../../middleware/multer")


const userWebsiteRouter=express.Router()


userWebsiteRouter.post("/register" ,upload.none(), userRegister)
userWebsiteRouter.post("/login" ,upload.none(),loginUser)


module.exports=userWebsiteRouter