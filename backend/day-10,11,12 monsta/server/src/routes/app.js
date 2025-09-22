const express=require("express")
const materialRouter = require("./admin/materialRoutes")
const colorRouter = require("./admin/colorRoutes")
const parentCategoryRouter = require("./admin/parentCategoryRoutes")
const subCategoryRouter = require("./admin/subCategoryRoutes")
const subSubCategoryRouter = require("./admin/subSubCategoryRoutes")
const productRouter = require("./admin/productRoutes")
const profileAuthRouter = require("./admin/profileRoutes")
const colorWebsiteRouter = require("./website/colorWebsiteRoutes")
const categoryWebsiteRouter = require("./website/categoryWebsiteRoutes")
const productWebsiteRouter = require("./website/productWebsiteRoutes")
const userWebsiteRouter = require("./website/userWebsiteRoutes")
const cartWebsiteRouter = require("./website/cartWebsiteRoutes")
const orderWebsiteRouter = require("./website/orderWebsiteRoutes")


const adminRouter=express.Router()
const websiteRouter=express.Router()

// for admin
adminRouter.use("/material",materialRouter)
adminRouter.use("/color",colorRouter)
adminRouter.use("/parent-category",parentCategoryRouter)
adminRouter.use("/sub-category",subCategoryRouter)
adminRouter.use("/sub-sub-category",subSubCategoryRouter)
adminRouter.use("/product",productRouter)
adminRouter.use(profileAuthRouter)


// for website 
websiteRouter.use("/color",colorWebsiteRouter)
websiteRouter.use("/category",categoryWebsiteRouter)
websiteRouter.use("/product",productWebsiteRouter)
websiteRouter.use("/user",userWebsiteRouter)
websiteRouter.use("/cart",cartWebsiteRouter)
websiteRouter.use("/order",orderWebsiteRouter)


module.exports={
    adminRouter,
    websiteRouter
}