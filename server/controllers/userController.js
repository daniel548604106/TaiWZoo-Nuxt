const User = require('../models/userModel')
const generateToken = require('../lib/generateToken')
const multer = require('multer')
const ImageKit = require("imagekit");
const Account = require('../models/accountModel')
const axios = require('axios')
const qs = require('query-string')
const jwt_decode = require('jwt-decode')
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
const multerStorage = multer.diskStorage({
  destination: (req,file, cb) => {
    cb(null, 'server/uploads/img/users')
  },
  filename: (req,file,cb) => {
    const ext = file.mimetype.split('/')[1]
    cb(null, `user-${req.params._id}-${Date.now()}.${ext}`)
  }
})

// Only Allow Image file to be uploaded
const multerFilter = (req,file,cb) => {
  if(file.mimetype.startsWith('image')){
    cb(null, true)
  }else{
    cb('Not an image, please upload only images', false)
  }
} 

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter
})

const uploadUserPhoto = upload.single('avatar')


const imagekit = new ImageKit({
  publicKey : 'public_VxxKPNOCjc7ub62pJabHuLA44WE=',
  privateKey : 'private_TuXfAhCaGaNLrOgkonL+NslUVLY=',
  urlEndpoint : `https://ik.imagekit.io/4liibdxmxfn`
});

const uploadToImageKit = async (req,res, next) => {
  try{
     const uploaded = await imagekit.upload({
      file : req.body.avatar, //required
      fileName : `user-${req.params._id}-${Date.now()}`,   //required
      folder: '/images/users/'
    })
     req.body.avatar = uploaded.url
      console.log('name',uploaded.name, 'filedId', uploaded.fileId)
      next()
  }catch(error){
    console.log(error)
  }
}



const patchMyData = async(req,res) =>{
  try{

    console.log(req.body)
    const avatar = req.body.avatar
    const { name, account, website, biography, gender} = req.body
    const user = await User.findById(req.user._id)
    
    user.name = name 
    user.account = account 
    user.website = website 
    user.biography = biography 
    user.gender = gender 
    user.avatar = avatar
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

const oAuthLogin = async(req,res ,next) => {
  try{
    const  {code, provider}  = req.body
    let content;
    switch(provider){
      case 'google':
      const google_url = 'https://oauth2.googleapis.com/token'
      let googleParams = qs.stringify({ access_type: 'offline' ,code ,client_id : process.env.GOOGLE_AUTH_CLIENT_ID, client_secret: process.env.GOOGLE_AUTH_CLIENT_SECRET, redirect_uri: process.env.REDIRECT_URI, grant_type: 'authorization_code'})
      const { data } = await axios.post(google_url ,googleParams,{
      headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      console.log(data)
      content = data
      break;
      case 'facebook':
      console.log('fafa')
      let facebookParams = qs.stringify({ client_id: process.env.FACEBOOK_AUTH_CLIENT_ID, redirect_uri : process.env.REDIRECT_URI, client_secret : process.env.FACEBOOK_AUTH_CLIENT_SECRET, code})
      const facebook_url = `https://graph.facebook.com/v9.0/oauth/access_token?${facebookParams}`
      data = await axios.get(facebook_url)
      console.log(data)
    }
  console.log(content)
  const { access_token, expires_in ,id_token} = content
  console.log(id_token)
  const detail = (jwt_decode(id_token))
  console.log(detail)
  // Check if Social Account Exists
  const account = await Account.findOne({email: detail.email})
  if(account){
    return res.status(200).json({
      status: 'success',
      access_token,
      account
    }) 
  }

  // Create New Account
  const newAccount = await Account.create({
    name: detail.name,
    avatar: detail.picture,
    provider: 'google',
    email: detail.email,
    token: id_token,
    access_token : access_token
  })

  res.status(200).json({
    status: 'success',
    access_token,
    account:newAccount
  })
  }catch(error){
    console.log(error)
  }
}


module.exports = { userSignup, oAuthLogin, userLogin ,getMyData , patchMyData,uploadUserPhoto, uploadToImageKit }
