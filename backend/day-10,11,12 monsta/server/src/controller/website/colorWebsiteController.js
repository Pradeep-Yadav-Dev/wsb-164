const Color = require("../../modal/colorModal")

const viewColorWebsite=async(req,res)=>{
    try{
        let data=await Color.find({status:true})
        res.status(200).json({message:"Color Data" , data})
    }
    catch(error){
        console.error(error)
        res.status(500).json({message:"Inernal server error"})
    }
}


module.exports=viewColorWebsite