const { default: slugify } = require("slugify")
const ParentCategory = require("../../modal/parentCategoryModal")
const SubCategory = require("../../modal/subCategoryModal")
const SubSubCategory = require("../../modal/subSubCategoryModal")
const filePath = "http://localhost:5600/uploads/"

const addSubSubCategory = async (req, res) => {
    try {

        

        let obj = {
            parentCategory: req.body.parentCategory,
            subCategory: req.body.subCategory,
            subSubCategoryName: req.body.subSubCategoryName,
            order: req.body.order,
            slug: slugify(req.body.slug, { replacement: '-', lower: true, trim: true }),
            subSubCategoryImage: req.file.filename,
        }

        let data=new SubSubCategory(obj)
        await data.save()

        res.status(200).json({ message: "Sub Sub Category Add Successfully...." })
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

const activeSubCategory = async (req, res) => {
    try {

        let data = await SubCategory.find({ status: true, parentCategory: req.params }).select("subCategoryName")


        res.status(200).json({ message: "Active Sub Category View Successfully....", data })
    }
    catch (error) {
        console.error(error)
        res.status(500).json({ message: "Internal server error" })
    }
}




const viewSubSubCategory=async(req,res)=>{
    try{

   let data=await SubSubCategory.find()
        .populate({
            path:"parentCategory",
            select:"parentCategoryName"
        })
         .populate({
            path:"subCategory",
            select:"subCategoryName"
        })

        res.status(200).json({ message: "Sub Category View Successfully....",data ,filePath})
    }
    catch (error) {
        console.error(error)
        res.status(500).json({ message: "Internal server error" })
    }
}

module.exports = {
    addSubSubCategory,
    activeParentCategory,
    activeSubCategory,
    viewSubSubCategory

}

