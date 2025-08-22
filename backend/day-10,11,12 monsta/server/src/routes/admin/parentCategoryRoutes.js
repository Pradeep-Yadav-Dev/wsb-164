const express=require("express")
const { addParentCategory, viewparentCategory } = require("../../controller/admin/parentCategoryController")
const upload = require("../../middleware/multer")


const parentCategoryRouter=express.Router()


parentCategoryRouter.post("/add",upload.single("parentCategoryImage"),addParentCategory)
parentCategoryRouter.get("/view",viewparentCategory)


module.exports=parentCategoryRouter

