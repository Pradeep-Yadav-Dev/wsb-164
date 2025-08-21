const mongoose=require("mongoose")

const parentCategorySchema=mongoose.Schema({
    parentCategoryImage:{
        type:String,
        required:true
    },
     categoryName:{
        type:String,
        required:true
    },
     order:{
        type:Number,
        required:true
    },
     slug:{
        type:String,
        required:true
    }
},{
     timestamps:true
})

const ParentCategory=mongoose.model("ParentCategory",parentCategorySchema)


module.exports=ParentCategory