const express=require("express")
const viewCategoryWebsite = require("../../controller/website/categoryWebsiteController")


const categoryWebsiteRouter=express.Router()


categoryWebsiteRouter.get("/view",viewCategoryWebsite)


module.exports=categoryWebsiteRouter