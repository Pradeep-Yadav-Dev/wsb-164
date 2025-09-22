const express=require("express")
const viewColorWebsite = require("../../controller/website/colorWebsiteController")

const colorWebsiteRouter=express.Router()


colorWebsiteRouter.get("/view",viewColorWebsite)


module.exports=colorWebsiteRouter