const express=require("express")
const { addSubCategory, activeParentCategory, viewSubCategory } = require("../../controller/admin/subCategoryController")
const upload = require("../../middleware/multer")



const subCategoryRouter=express.Router()


subCategoryRouter.post("/add",upload.single("subCategoryImage") ,addSubCategory)
subCategoryRouter.get("/active-parent-category",activeParentCategory)
subCategoryRouter.get("/view",viewSubCategory)


module.exports=subCategoryRouter

