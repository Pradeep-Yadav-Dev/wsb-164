const express=require("express")
const { categoryProductWebsite, viewProductWebsite } = require("../../controller/website/productWebsiteController")



const productWebsiteRouter=express.Router()


productWebsiteRouter.get("/single/:slug",viewProductWebsite)
productWebsiteRouter.get("/slug/:categoryslug" ,categoryProductWebsite)


module.exports=productWebsiteRouter