const mongoose=require("mongoose")

const subSubCategorySchema=mongoose.Schema({
    subSubCategoryImage:{
        type:String,
        required:true
    },
    parentCategory:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ParentCategory"
    },
     subCategory:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"SubCategory"
    },
    subSubCategoryName:{
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

const SubSubCategory=mongoose.model("SubSubCategory",subSubCategorySchema)


module.exports=SubSubCategory