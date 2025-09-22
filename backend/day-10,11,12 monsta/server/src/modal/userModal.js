const mongoose=require("mongoose")

let userSchema=mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    gender:{
        type:Boolean,
        enum:["Mr" , "Mrs"]
    },
    number:{
        type:Number,
        
    },
    address:{
         type:String,
    },
    billingAddress:{
        billingName:String,
        billingEmail:String,
        billingNumber:Number,
        billingAddresses:String,
        billingState:String,
    }
})

let User=mongoose.model("User",userSchema)

module.exports=User