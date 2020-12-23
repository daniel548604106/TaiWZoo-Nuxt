const User = require('../models/userModel')

const getAllUsers = async(req,res) =>{
  try{
    const users = await User.find()
    res.status(200).json({
      status: 'success',
      users
    })
  }catch(error){
    console.log(error)
  }
}


const getUser = async(req,res) =>{
  const {id}  = req.params
  try{
    const user = await User.findById(id)
    res.status(200).json({
      status: 'success',
      user
    })
  }catch(error){
    console.log(error)
  }
}


module.exports = { getAllUsers, getUser }