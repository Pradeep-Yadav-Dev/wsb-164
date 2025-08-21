const Color = require("../../modal/colorModal")

const addColor=async(req,res)=>{
    try{
        
        let data= Color(req.body)
        await data.save()

        // let data=Color.create(req.body)


        res.status(200).json({ message: "Color add Successfully...." ,data})
    }
    catch(error){
        console.error(error)
        res.status(500).json({ message: "Internal server error" })
    }
}


const viewColor=async(req,res)=>{
    try{
        let data= await Color.find()
        res.status(200).json({ message: "Color fetched Successfully...." ,data})
    }
    catch(error){
        console.error(error)
        res.status(500).json({ message: "Internal server error" })
    }
}



module.exports={
    addColor,
    viewColor
}