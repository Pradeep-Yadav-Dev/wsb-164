var jwt = require('jsonwebtoken');

const authMiddleware=(req,res,next)=>{
    try{

        
        let token=req.headers.auth.split(" ")[1]
        if(!token){
            return res.status(200).json({message: "Token missing"})
        }
        let decoded = jwt.verify(token, process.env.JWT_KEY);

        req.user=decoded.email


        next()
    }
    catch(error){
        console.error(error)
        res.status(500).json({message: error.message})
    }
}


module.exports=authMiddleware