const mongoose=require("mongoose")

const materialSchema=new mongoose.Schema({
    materialName:{
        type:String,
        required:true
    },
    order:{
        type:Number,
        required:true
    },
    status:{
        type:Boolean,
        default:true
    }
})

const MaterialModal=mongoose.model("Material",materialSchema)

module.exports={
    MaterialModal
}