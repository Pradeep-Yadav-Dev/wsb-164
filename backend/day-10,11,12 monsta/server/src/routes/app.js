const express=require("express")
const materialRouter = require("./admin/materialRoutes")
const colorRouter = require("./admin/colorRoutes")
const parentCategoryRouter = require("./admin/parentCategoryRoutes")


const adminRouter=express.Router()


adminRouter.use("/material",materialRouter)
adminRouter.use("/color",colorRouter)
adminRouter.use("/parent-category",parentCategoryRouter)


module.exports={
    adminRouter
}