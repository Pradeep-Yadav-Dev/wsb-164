const { default: slugify } = require("slugify")
const ParentCategory = require("../../modal/parentCategoryModal")
const SubCategory = require("../../modal/subCategoryModal")
const filePath="http://localhost:5600/uploads/"

const addSubCategory = async (req, res) => {
    try {

        let obj = {
            parentCategory: req.body.parentCategory,
            subCategoryName: req.body.subCategoryName,
            order: req.body.order,
            slug: slugify(req.body.slug, { replacement: '-', lower: true, trim: true }),
            subCategoryImage: req.file.filename,
        }
        let data=new SubCategory(obj)
        await data.save()

        res.status(200).json({ message: "Sub Category Add Successfully...." })
    }
    catch (error) {
        console.error(error)
        res.status(500).json({ message: "Internal server error" })
    }
}

const activeParentCategory = async (req, res) => {
    try {

        let data = await ParentCategory.find({ status: true }).select("parentCategoryName")

        res.status(200).json({ message: "Active Parent Category View Successfully....", data })
    }
    catch (error) {
        console.error(error)
        res.status(500).json({ message: "Internal server error" })
    }
}

const viewSubCategory=async(req,res)=>{
    try{

   let data=await SubCategory.find()
        .populate({
            path:"parentCategory",
            select:"parentCategoryName"
        })

        res.status(200).json({ message: "Sub Category View Successfully....",data ,filePath})
    }
    catch (error) {
        console.error(error)
        res.status(500).json({ message: "Internal server error" })
    }
}

module.exports = {
    addSubCategory,
    activeParentCategory,
    viewSubCategory
}

