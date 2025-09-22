const Cart = require("../../modal/cartModal")
const User = require("../../modal/userModal")

const addToCart=async(req,res)=>{
    try{

        let {productId ,productImage ,quantity,productName,price}=req.body

        let getUser=await User.findOne({email:req.user})
        let userId=getUser._id
       

        let isCart=await Cart.findOne({user:userId , "items.productId":productId})


        //upsert =insert + update
        if(!isCart){
            await Cart.findOneAndUpdate(
                {user:userId},
                {
                    $setOnInsert:{user:userId},
                    $push:{items:{productId,productImage,quantity,productName,price}}
                },
                {new:true,upsert:true}
            )
        }
        else{
            await Cart.findOneAndUpdate(
                {user:userId , "items.productId":productId},
                {$inc:{"items.$.quantity":1}},
                {new:true}
            )
        }


        
        res.status(200).json({message:"Item added to cart successfully"})
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:"Internal Server Error"})
    }
}

const viewCart=async(req,res)=>{
    try{
        let getUser=await User.findOne({email:req.user})
        let userId=getUser._id
       

        let data=await Cart.findOne({user:userId})

        let totalAmout=await data?.items?.reduce((a,b)=>{
            return a + ((b.quantity)* (b.price))
        },0)
        
        res.status(200).json({message:" cart item fetch successfully" ,data ,totalAmout})
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:"Internal Server Error"})
    }
}


module.exports={
    addToCart,
    viewCart
}
 