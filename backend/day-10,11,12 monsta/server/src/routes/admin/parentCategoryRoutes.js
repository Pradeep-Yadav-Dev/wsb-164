const express=require("express")

const multer=require("multer")
const { addParentCategory } = require("../../controller/admin/parentCategoryController")
const upload=multer()

const parentCategoryRouter=express.Router()


parentCategoryRouter.post("/add",upload.single("parentCategoryImage"),addParentCategory)



module.exports=parentCategoryRouter

