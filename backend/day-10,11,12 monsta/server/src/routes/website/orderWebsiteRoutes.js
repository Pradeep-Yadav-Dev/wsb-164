const express=require("express")

const upload = require("../../middleware/multer")

const authMiddleware = require("../../middleware/authMiddleware")
const { createOrder, verifyPayment, getOrders } = require("../../controller/website/orderWebsiteController")


const orderWebsiteRouter=express.Router()


orderWebsiteRouter.post("/create-order" ,authMiddleware,upload.none(), createOrder)
orderWebsiteRouter.post("/verify-payment" ,authMiddleware,upload.none(), verifyPayment)
orderWebsiteRouter.get("/get-orders" ,authMiddleware,upload.none(), getOrders)





module.exports=orderWebsiteRouter