const { MaterialModal } = require("../../modal/materialModal.js")


const addMaterial = async (req, res) => {
    try {

        let data = new MaterialModal(req.body)
        await data.save()

        res.status(200).json({ message: "material add Successfully....", data })
    }
    catch (error) {
        console.error(error)
        res.status(500).json({ message: "Internal server error" })
    }
}

const viewMaterial = async (req, res) => {
    try {
        let data = await MaterialModal.find()

        res.status(200).json({ message: "material view Successfully", data })
    }
    catch (error) {
        console.error(error)
        res.status(500).json({ message: "Internal server error" })
    }
}

const updateStatus = async (req, res) => {
    try {

        
        let currentStatus=await MaterialModal.findById(req.params)
        let oldStatus=!(currentStatus.status)

        await MaterialModal.findByIdAndUpdate(req.params , {$set:{status:oldStatus}})

        res.status(200).json({ message: "Status Update Successfully" })
    }
    catch (error) {
        console.error(error)
        res.status(500).json({ message: "Internal server error" })
    }
}

const singleDelete=async(req,res)=>{
    try{
        await MaterialModal.findByIdAndDelete(req.params)
        res.status(200).json({ message: "Delete Successfully" })
    }
    catch (error) {
        console.error(error)
        res.status(500).json({ message: "Internal server error" })
    }
}

const multipalDelete=async(req,res)=>{
    try{
        
        await MaterialModal.deleteMany({_id:req.body})
        res.status(200).json({ message: "Delete Successfully" })
    }
    catch (error) {
        console.error(error)
        res.status(500).json({ message: "Internal server error" })
    }
}

const fetchData=async(req,res)=>{
    try{
        
        let data=await MaterialModal.findById(req.params)
        
        res.status(200).json({ message: "Fetch Successfully" ,data })
    }
    catch (error) {
        console.error(error)
        res.status(500).json({ message: "Internal server error" })
    }
}

const editMaterial=async(req,res)=>{
    try{
       
        await MaterialModal.findByIdAndUpdate(req.params ,{$set:req.body})
        
        res.status(200).json({ message: "Update Successfully"  })
    }
    catch (error) {
        console.error(error)
        res.status(500).json({ message: "Internal server error" })
    }
}




module.exports = {
    addMaterial,
    viewMaterial,
    updateStatus,
    singleDelete,
    multipalDelete,
    fetchData,
    editMaterial
}