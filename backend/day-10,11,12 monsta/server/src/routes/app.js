const express=require("express")
const materialRouter = require("./admin/materialRoutes")
const colorRouter = require("./admin/colorRoutes")
const parentCategoryRouter = require("./admin/parentCategoryRoutes")
const subCategoryRouter = require("./admin/subCategoryRoutes")


const adminRouter=express.Router()


adminRouter.use("/material",materialRouter)
adminRouter.use("/color",colorRouter)
adminRouter.use("/parent-category",parentCategoryRouter)
adminRouter.use("/sub-category",subCategoryRouter)


module.exports={
    adminRouter
}