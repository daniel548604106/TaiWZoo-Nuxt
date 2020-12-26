const User = require('../models/userModel')
const generateToken = require('../lib/generateToken')

const getMyData = async(req,res) =>{
  try{
    const user = await User.findById(req.user._id)
    console.log(user)
    res.status(200).json({
      status: 'success',
      user
    })

  }catch(error){
    console.log(error)
  }
}

const patchMyData = async(req,res) =>{
  try{
    console.log(req.body)
    const { name, account, website, biography, gender} = req.body
    const user = await User.findById(req.user._id)
    
    user.name = name 
    user.account = account 
    user.website = website 
    user.biography = biography 
    user.gender = gender 
    await user.save()
    
    res.status(200).json({
      status: 'success',
      user
    })
  }catch(error){
    console.log(error)
  }
}

const userSignup = async (req, res, next) => {
  try{
    const { name , email, password} = req.body
    const account = email.split('@')[0]
    console.log(name,email,password)
    // check if email exists
    const userExists = await User.findOne({email})
    if(userExists){
      return next(new Error('This account already exists!'))
    }
    const newUser = await User.create({name,email,password,account})
    console.log(newUser)
    res.status(200).json({
      status: 'success',
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      account: newUser.account,
      isAdmin: newUser.isAdmin,
      token: generateToken(newUser._id)
    })
  }catch(error){
    console.log(error)
  }
}

const userLogin = async(req,res,next) =>{
  try{
    const {email,password} = req.body
    console.log(email,password)
    // check if email is in db , and validate password
    const user = await User.findOne({email})
    console.log('answer', await user.matchPassword(password))
    if (user && (await user.matchPassword(password))) {
      return res.json({
        status: 'success',
        user,
        token: generateToken(user._id),
      })
    } else {
      res.status(401)
      next( new Error("Invalid email or password"))
    }
  }catch(error){
    console.log(error)
  }
}


module.exports = { userSignup, userLogin ,getMyData , patchMyData }
