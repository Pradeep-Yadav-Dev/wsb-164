const express=require("express")
const { addMaterial, viewMaterial, updateStatus, singleDelete, multipalDelete, fetchData, editMaterial } = require("../../controller/admin/materialController")
const app=express()
const materialRouter=express.Router()
const multer=require("multer")
const { adminRouter } = require("../app")
const upload=multer()


materialRouter.post("/add",upload.none(),addMaterial)
materialRouter.get("/view",viewMaterial)
materialRouter.put("/status-update/:_id",updateStatus)
materialRouter.delete("/single-delete/:_id" , singleDelete)
materialRouter.post("/multipal-delete",upload.none(),multipalDelete)
materialRouter.get("/fetch/:_id",fetchData)
materialRouter.put("/edit/:_id",upload.none(),editMaterial)

module.exports=materialRouter