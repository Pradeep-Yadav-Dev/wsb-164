const Color = require("../../modal/colorModal");
const { MaterialModal } = require("../../modal/materialModal");
const ParentCategory = require("../../modal/parentCategoryModal");
const { Product } = require("../../modal/productModal");
const SubCategory = require("../../modal/subCategoryModal");
const SubSubCategory = require("../../modal/subSubCategoryModal");
const { default: slugify } = require("slugify")
const filePath="http://localhost:5600/uploads/"

const activeColor = async (req, res) => {
    try {
        const data = await Color.find({ status: true });
        res.status(200).json({ message: "Active colors fetched successfully", data });
    }
    catch (error) {
        console.error("Error fetching active colors:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

const activeMaterial = async (req, res) => {
    try {
        const data = await MaterialModal.find({ status: true }).select("materialName")
        res.status(200).json({ message: "Active materials fetched successfully", data });
    }
    catch (error) {
        console.error("Error fetching active materials:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}


const activeParentCategory = async (req, res) => {
    try {
        const data = await ParentCategory.find({ status: true }).select("parentCategoryName")
        res.status(200).json({ message: "Active parent categories fetched successfully", data });
    }
    catch (error) {
        console.error("Error fetching active parent category:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

const activeSubCategory = async (req, res) => {
    try {

        const data = await SubCategory.find({ status: true, parentCategory: req.params })
        res.status(200).json({ message: "Active sub categories fetched successfully", data });
    }
    catch (error) {
        console.error("Error fetching active sub categories:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

const activeSubSubCategory = async (req, res) => {
    try {

        const data = await SubSubCategory.find({ status: true, subCategory: req.params })
        res.status(200).json({ message: "Active sub sub categories fetched successfully", data });
    }
    catch (error) {
        console.error("Error fetching active sub sub categories:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

const addProduct = async (req, res) => {
    try {


        let obj = { ...req.body }

        if (obj.slug) {
            obj.slug = slugify(req.body.slug, { replacement: '-', lower: true, trim: true })
        }

        if (req.files.productImage) {
            obj.productImage = req.files.productImage[0].filename
        }
        if (req.files.backImage) {
            obj.backImage = req.files.backImage[0].filename
        }
        if (req.files.galleryImage) {
            obj.galleryImage = req.files.galleryImage.map((v) => v.filename)
        }

        let data = new Product(obj)
        await data.save()

        res.status(201).json({ message: "Product added successfully" });
    }
    catch (error) {
        console.error("Error adding product:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

const viewProduct = async (req, res) => {
    try {
        let data=await Product.find()
        .populate("color" ,"colorName")
        .populate("material" ,"materialName") 
        .populate("parentCategory" ,"parentCategoryName")
        .populate("subCategory" ,"subCategoryName")
        .populate("subSubCategory" ,"subSubCategoryName")



        res.status(201).json({ message: "Product view successfully",data ,filePath });
    }
    catch (error) {
        console.error("Error view product:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = {
    activeColor,
    activeMaterial,
    activeParentCategory,
    activeSubCategory,
    activeSubSubCategory,
    addProduct,
    viewProduct
}   