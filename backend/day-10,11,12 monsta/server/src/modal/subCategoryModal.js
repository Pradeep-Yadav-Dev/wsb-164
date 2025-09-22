const mongoose = require("mongoose")

const subCategorySchema = mongoose.Schema({
    subCategoryImage: {
        type: String,
        required: true
    },
    parentCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ParentCategory"
    },
    subCategoryName: {
        type: String,
        required: true
    },
    order: {
        type: Number,
        required: true
    },
    slug: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
})

subCategorySchema.virtual("childTwo",{
    ref:"SubSubCategory",
    localField:"_id",
    foreignField:"subCategory",
})

subCategorySchema.set("toJSON", {virtuals: true})
subCategorySchema.set("toObject", {virtuals: true})

const SubCategory = mongoose.model("SubCategory", subCategorySchema)


module.exports = SubCategory