const Profile = require("../../modal/profileModal")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const filePath = "http://localhost:5600/uploads/"

const registerAdmin=async(req,res)=>{
    try{
        let obj={
            name:process.env.ADMIN_NAME,
            email:process.env.ADMIN_EMAIL,
            phone:process.env.ADMIN_PHONE,
            profileImage:process.env.ADMIN_IMAGE,
            password: await bcrypt.hash(process.env.ADMIN_PASSWORD , 10) ,
        }
        let isAdmin=await Profile.findOne({email:process.env.ADMIN_EMAIL})

        if(isAdmin){
            console.log("Admin already exists")
            return
        }

        await Profile.create(obj)
        console.log( "Admin registered successfully" )

    }
    catch(error){
        console.error(error)
        res.status(500).json({message: error.message})
    }
}


const loginAdmin=async(req,res)=>{
    try{
        let isAdmin=await Profile.findOne({email:req.body.email})
        // console.log(isAdmin)

        if(!isAdmin){
           return res.status(200).json({message: "Enter Valid Email Id"})
        }

        const checkPassword=await bcrypt.compare(req.body.password , isAdmin.password  )

        if(checkPassword==false){
           return res.status(200).json({message: "Enter Valid Password"})
        }
        
        let jwtToken=jwt.sign(
            {email:isAdmin.email} ,
            process.env.JWT_KEY,
            {expiresIn: "6h"}
        )

        res.status(200).json({message: "Login successful", token: jwtToken ,status:true })

    }
    catch(error){
        console.error(error)
        res.status(500).json({message: error.message})
    }
}




const viewProfile=async(req,res)=>{
    try{
       
        let data=await Profile.findOne({email:req.user}).select("name email profileImage phone")
        
        res.status(200).json({message: "Profile fetched successfully" , data ,filePath})
    }
    catch(error){
        console.error(error)
        res.status(500).json({message: error.message})
    }
}

module.exports={
    loginAdmin,
    viewProfile,
    registerAdmin
}   
    
