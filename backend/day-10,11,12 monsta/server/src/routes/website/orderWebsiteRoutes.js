const express=require("express")

const upload = require("../../middleware/multer")

const authMiddleware = require("../../middleware/authMiddleware")
const { createOrder, verifyPayment } = require("../../controller/website/orderWebsiteController")


const orderWebsiteRouter=express.Router()


orderWebsiteRouter.post("/create-order" ,authMiddleware,upload.none(), createOrder)






module.exports=orderWebsiteRouter