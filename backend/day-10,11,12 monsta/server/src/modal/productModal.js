const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    productImage: {
        type: String,
        required: true
    },
    backImage: {
        type: String,
        required: true
    },
    galleryImage: [{
        type: String,
        required: true
    }],
    productName: {
        type: String,
        required: true
    },
    parentCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ParentCategory"

    },
    subCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubCategory"

    },
    subSubCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubSubCategory"

    },
    color: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Colors"

    },
    material: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Material"

    },
    productType: {
        type: String,
        enum: ['Featured', 'New Arrivals', 'Onsale'],
        required: true
    },
    bestSelling: {
        type: Boolean,
        required: true
    },
    topRated: {
        type: Boolean,
        required: true
    },
    upSell: {
        type: Boolean,
        required: true
    },
    bestSelling: {
        type: Boolean,
        required: true
    },
    actualPrice: {
        type: Number,
        required: true
    },
    sellingPrice: {
        type: Number,
        required: true,
        min: [0, "Selling price must be positive"]
    },
    stocks: {
        type: Number,
        required: true,
        min: [0, "Stocks must be positive"]
    },
    slug: {
        type: String,
        required: true,
        // unique:true
    },
    order: {
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
}
)

const Product = mongoose.model("Product", productSchema)

module.exports = {
    Product
}