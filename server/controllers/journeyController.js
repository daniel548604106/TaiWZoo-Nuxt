const Journey = require('../models/journeyModel.js')
const User = require('../models/userModel.js')
const Note = require('../models/noteModel.js')
const multer = require('multer')

const multerStorage = multer.diskStorage({
  destination: (req,file, cb) => {
    cb(null, 'server/uploads/img/journey')
  },
  filename: (req,file,cb) => {
    const ext = file.mimetype.split('/')[1]
    cb(null, `journey-${req.params.id}-${Date.now()}.${ext}`)
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

const uploadImage = upload.single('image')
const postNote = async(req,res) => {
  try{
    console.log(req.file)
    const journey = await Journey.findById(req.params.id)
    console.log('journey',journey)
    console.log(req.body)
  }catch(error){
    console.log(error)
  }
}



const postJourney = async(req,res) =>{
  try{
    
    console.log('body',req.body)
    // const { imageCover, name, startDate, endDate, sharingSetting, editSetting, participants} = req.body
    const newJourney = await Journey.create(req.body)
    console.log(newJourney)
    res.status(200).json({
      status: 'success',
      newJourney
    })
  }catch(error){
    console.error(error)
    res.status(400).json({
      message: error
    })
  }
}

const getMyAllJourneys = async(req,res) =>{
  try{
    const journey = await User.findById(req.user._id).populate('journeys')
    console.log(journey)
    res.status(200).json({
      status: 'success',
      journeys: journey.journeys
    })
  }catch(error){
    console.log(error)
  }
}


const getJourney = async(req,res) =>{
  try{
    const journey = await Journey.findById(req.params.id)
    res.status(200).json({
      status: 'success',
      journey
    })
  }catch(error){
    console.error(error)
    res.status(400).json({
     status: 'fail',
     error
    })
  }
}



module.exports = { postJourney, postNote, getJourney, getMyAllJourneys , uploadImage}