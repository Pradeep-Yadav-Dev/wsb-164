const express=require("express")
const materialRouter = require("./admin/materialRoutes")


const adminRouter=express.Router()


adminRouter.use("/material",materialRouter)


module.exports={
    adminRouter
}