const express=require("express")
const { addMaterial, viewMaterial, updateStatus } = require("../../controller/admin/materialController")
const app=express()
const materialRouter=express.Router()
const multer=require("multer")
const { adminRouter } = require("../app")
const upload=multer()


materialRouter.post("/add",upload.none(),addMaterial)
materialRouter.get("/view",viewMaterial)
materialRouter.put("/status-update/:_id",updateStatus)

module.exports=materialRouter