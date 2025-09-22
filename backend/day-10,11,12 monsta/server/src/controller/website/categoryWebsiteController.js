const ParentCategory = require("../../modal/parentCategoryModal")


const viewCategoryWebsite=async(req,res)=>{
    try{
        let data=await ParentCategory.find().select("parentCategoryImage parentCategoryName slug")
        .populate({
            path:"childOne",
            select:"subCategoryImage subCategoryName slug -parentCategory ",
            populate:{
                path:"childTwo",
                select:"subSubCategoryImage  subSubCategoryName  slug -subCategory"
            }
        })
        .sort({order:1})

        
        res.status(200).json({message:"Tree Category Data",data})
    }
    catch(error){
        console.error(error)
        res.status(500).json({message:"Inernal server error"})
    }
}

module.exports=viewCategoryWebsite

