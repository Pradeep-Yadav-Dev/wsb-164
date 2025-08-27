const Color = require("../../modal/colorModal");
const { MaterialModal } = require("../../modal/materialModal");
const ParentCategory = require("../../modal/parentCategoryModal");
const SubCategory = require("../../modal/subCategoryModal");

const activeColor=async(req,res)=>{
    try{
        const data = await Color.find({ status: true });
        res.status(200).json({ message: "Active colors fetched successfully", data });
    }
    catch (error) {
        console.error("Error fetching active colors:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

const activeMaterial=async(req,res)=>{
    try{
        const data = await MaterialModal.find({ status: true }).select("materialName")
        res.status(200).json({ message: "Active materials fetched successfully", data });
    }
    catch (error) {
        console.error("Error fetching active materials:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}


const activeParentCategory=async(req,res)=>{
    try{
        const data = await ParentCategory.find({ status: true }).select("parentCategoryName")
        res.status(200).json({ message: "Active parent categories fetched successfully", data });
    }
    catch (error) {
        console.error("Error fetching active parent category:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

const activeSubCategory=async(req,res)=>{
    try{
       
        const data = await SubCategory.find({ status: true ,parentCategory:req.params})
        res.status(200).json({ message: "Active sub categories fetched successfully", data });
    }
    catch (error) {
        console.error("Error fetching active sub categories:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = {
    activeColor,
    activeMaterial,
    activeParentCategory,
    activeSubCategory
}   