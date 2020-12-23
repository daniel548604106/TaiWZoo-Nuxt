const User = require('../models/userModel')
const generateToken = require('../lib/generateToken')
const userSignup = async (req, res, next) => {
  try{

    const { name , email, password} = req.body
    console.log(name,email,password)
    // check if email exists
    const userExists = await User.findOne({email})
    if(userExists){
      return next(new Error('This account already exists!'))
    }
    
    const newUser = await User.create({name,email,password})
    console.log(newUser)
    res.status(200).json({
      status: 'success',
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
      token: generateToken(newUser._id)
    })
  }catch(error){
    console.log(error)
  }
}

module.exports = { userSignup }
