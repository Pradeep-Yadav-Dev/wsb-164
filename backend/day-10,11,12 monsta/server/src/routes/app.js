const express=require("express")
const materialRouter = require("./admin/materialRoutes")
const colorRouter = require("./admin/colorRoutes")
const parentCategoryRouter = require("./admin/parentCategoryRoutes")
const subCategoryRouter = require("./admin/subCategoryRoutes")
const subSubCategoryRouter = require("./admin/subSubCategoryRoutes")
const productRouter = require("./admin/productRoutes")
const profileAuthRouter = require("./admin/profileRoutes")


const adminRouter=express.Router()


adminRouter.use("/material",materialRouter)
adminRouter.use("/color",colorRouter)
adminRouter.use("/parent-category",parentCategoryRouter)
adminRouter.use("/sub-category",subCategoryRouter)
adminRouter.use("/sub-sub-category",subSubCategoryRouter)
adminRouter.use("/product",productRouter)
adminRouter.use(profileAuthRouter)


module.exports={
    adminRouter
}