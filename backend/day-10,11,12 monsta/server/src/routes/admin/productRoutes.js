const express = require("express")
const { activeColor, activeMaterial, activeParentCategory, activeSubCategory, activeSubSubCategory, addProduct, viewProduct } = require("../../controller/admin/productController")
const upload = require("../../middleware/multer")

const productRouter = express.Router()

productRouter.get("/active-color", activeColor)
productRouter.get("/active-material", activeMaterial)
productRouter.get("/active-parent-category", activeParentCategory)
productRouter.get("/active-sub-category/:_id", activeSubCategory)
productRouter.get("/active-sub-sub-category/:_id", activeSubSubCategory)

productRouter.post("/add", upload.fields([
    { name: "productImage", maxCount: 1 },
    { name: "backImage", maxCount: 1 },
    { name: "galleryImage", maxCount: 10 },

]), addProduct)

productRouter.get("/view",viewProduct)

module.exports = productRouter