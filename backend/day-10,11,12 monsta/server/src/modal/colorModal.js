const mongoose=require("mongoose")

const colorSchema=mongoose.Schema({
    colorName:{
         type:String,
        required:true
    },
    colorCode:{
         type:String,
        required:true
    },
    order:{
         type:Number,
        default:true
    },
    status:{
        type:Boolean,
        default:true
    }
},
{timestamps:true}
)


const Color=mongoose.model("Colors",colorSchema)

module.exports=Color