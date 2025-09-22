const { Product } = require("../../modal/productModal")


const viewProductWebsite = async (req, res) => {
    try {

       

        let data = await Product.findOne(req.params)
            .populate({
                path: "color",
                select: "colorName colorCode"
            })
            .populate({
                path: "material",
                select: "materialName"
            })
            .populate({
                path: "parentCategory",
                select: "parentCategoryImage parentCategoryName slug"
            })
            .populate({
                path: "subCategory",
                select: "subCategoryImage subCategoryName slug"
            })
            .populate({
                path: "subSubCategory",
                select: "subSubCategoryName  subSubCategoryImage slug"
            })

        res.status(200).json({ message: "Fetch Product Data", data })
    }
    catch (error) {
        console.error(error)
        // res.status(500).json({ message: "Inernal server error" })
    }
}

const categoryProductWebsite = async (req, res) => {
    try {

        const { categoryslug } = req.params;

        const products = await Product.find()
            .populate("parentCategory", "slug")
            .populate("subCategory", "slug")
            .populate("subSubCategory", "slug");

        
        const data = products.filter(
            (p) =>
                p.parentCategory?.slug === categoryslug ||
                p.subCategory?.slug === categoryslug ||
                p.subSubCategory?.slug === categoryslug
        );

        res.status(200).json({ message: "Fetch Category Product Data", data, count: data.length })
    }
    catch (error) {
        console.error(error)
        res.status(500).json({ message: "Inernal server error" })
    }
}





module.exports = {
    viewProductWebsite,
    categoryProductWebsite,
    
}



