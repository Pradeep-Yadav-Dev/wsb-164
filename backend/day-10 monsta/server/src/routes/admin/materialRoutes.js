const express=require("express")
const { addMaterial } = require("../../controller/admin/materialController")
const app=express()
const materialRouter=express.Router()


materialRouter.get("/add",addMaterial)


module.exports=materialRouter