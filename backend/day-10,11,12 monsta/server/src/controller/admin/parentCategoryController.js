const ParentCategory = require("../../modal/parentCategoryModal")
var slugify = require('slugify')

const filePath="http://localhost:5600/uploads/"


const addParentCategory = async (req, res) => {
    try {

        
        let obj={
            parentCategoryName:req.body.parentCategoryName,
            order:req.body.order,
            slug:slugify(req.body.slug ,{ replacement: '-',lower: true,trim: true} ),
            parentCategoryImage:req.file.filename,
        }

        let data=new ParentCategory(obj)
        await data.save()
        res.status(200).json({ message: "Category add Successfully...." })
    }
    catch (error) {
        console.error(error)
        res.status(500).json({ message: "Internal server error" })
    }
}

const viewparentCategory=async(req,res)=>{
    try{
        let data=await ParentCategory.find()

    res.status(200).json({ message: "Category View Successfully...." ,data ,filePath })
    }
    catch (error) {
        console.error(error)
        res.status(500).json({ message: "Internal server error" })
    }
}

module.exports={
    addParentCategory,
    viewparentCategory
}