const addMaterial=async(req,res)=>{
    try{
        res.status(200).json({message:"material work properly...."})
    }
    catch(error){
        res.status(500).json({message:"Internal server error"})
    }
}


module.exports={
    addMaterial
}