const mongoose=require("mongoose")

const parentCategorySchema=mongoose.Schema({
    parentCategoryImage:{
        type:String,
        required:true
    },
     parentCategoryName:{
        type:String,
        required:true
    },
     order:{
        type:Number,
        required:true
    },
     slug:{    
        type:String,
        required:true,
        trim:true
    },
    status:{
        type:Boolean,
        default:true
    }
},{
     timestamps:true
})

parentCategorySchema.virtual("childOne" , {
    ref:"SubCategory",
    localField:"_id",
    foreignField:"parentCategory"
})

parentCategorySchema.set("toJSON", {virtuals: true})
parentCategorySchema.set("toObject", {virtuals: true})



const ParentCategory=mongoose.model("ParentCategory",parentCategorySchema)


module.exports=ParentCategory