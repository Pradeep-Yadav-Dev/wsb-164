const express=require("express")

const upload = require("../../middleware/multer")
const { addToCart, viewCart } = require("../../controller/website/cartController")
const authMiddleware = require("../../middleware/authMiddleware")


const cartWebsiteRouter=express.Router()


cartWebsiteRouter.post("/add" ,authMiddleware,upload.none(), addToCart)
cartWebsiteRouter.get("/view" ,authMiddleware,upload.none(), viewCart)




module.exports=cartWebsiteRouter