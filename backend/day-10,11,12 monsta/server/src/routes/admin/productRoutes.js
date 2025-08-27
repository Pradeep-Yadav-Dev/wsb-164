const express=require("express")
const { activeColor, activeMaterial, activeParentCategory, activeSubCategory } = require("../../controller/admin/productController")

const productRouter=express.Router()

productRouter.get("/active-color",activeColor)
productRouter.get("/active-material",activeMaterial)
productRouter.get("/active-parent-category" , activeParentCategory)
productRouter.get("/active-sub-category/:_id" , activeSubCategory)

module.exports=productRouter