const express=require("express")
const { addColor, viewColor } = require("../../controller/admin/colorController")
const multer=require("multer")
const upload=multer()

const colorRouter=express.Router()


colorRouter.post("/add",upload.none(),addColor)
colorRouter.get("/view",viewColor)


module.exports=colorRouter