const mongoose=require("mongoose")

const cartSchema=mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},

    items:[
        {
            productId:{type:mongoose.Schema.Types.ObjectId,ref:"product",required:true},
            quantity:{type:Number,default:1,min:1},
            price:{type:Number,min:0},
            productName:{type:String},
            productImage:{type:String},
        }
    ],

})

const Cart=mongoose.model("Cart",cartSchema)

module.exports=Cart