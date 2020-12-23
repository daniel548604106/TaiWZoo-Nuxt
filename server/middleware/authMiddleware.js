const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
const protect = async (req,res,next) =>{
  try{
    console.log('protected')
    let token  = ''
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
      token = req.headers.authorization.split(' ')[1]
      //JWT will return jwt malformed If Token is null/Invalid-Signature that is being passed to jwt.verifty function
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // find that user
      const user = await User.findById(decoded.id)
      if(user){
        req.user = user
      }
    }
    next() //middleware passed
  }catch(error){
    res.status(403).json({
      message: 'token invalid'
    })
  }
  // check if token exists in headers
}


const admin = (req,res, next) =>{
  if(!req.user.isAdmin){
    return res.status(403).json({
      status: 'fail',
      message: "User is not authorized as an admin"
    })
  }
  next()
}



module.exports = { protect, admin}