
const bcrypt = require('bcrypt');
const User = require('../../modal/userModal');
var jwt = require('jsonwebtoken');


const userRegister = async (req, res) => {
    try {

        let bcryptPassword = await bcrypt.hash(req.body.password, 10)

        let isUser = await User.findOne({ email: req.body.email })

        if (isUser) {
            res.status(200).json({ message: "This Email id Already Used", })
            return
        }
        let data = new User({ email: req.body.email, password: bcryptPassword })
        await data.save()

        res.status(200).json({ message: "Register successfully", })
    }
    catch (error) {
        console.error(error)
        res.status(500).json({ message: "Inernal server error" })
    }


}

const loginUser=async(req,res)=>{
    try{
        let isUser=await User.findOne({email:req.body.email})
        // console.log(isUser)

        if(!isUser){
           return res.status(200).json({message: "Enter Valid Email Id"})
        }

        const checkPassword=await bcrypt.compare(req.body.password , isUser.password  )

        if(checkPassword==false){
           return res.status(200).json({message: "Enter Valid Password"})
        }
        
        let jwtToken=jwt.sign(
            {email:isUser.email , id:isUser._id} ,
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



module.exports = { userRegister ,loginUser }