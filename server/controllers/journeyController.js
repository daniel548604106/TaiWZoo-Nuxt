const Journey = require('../models/journeyModel.js')
const User = require('../models/userModel.js')
const Note = require('../models/noteModel.js')
const Expense = require('../models/expenseModel.js')
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
  fileFilter: multerFilter,
  limits: { fieldSize: 25 * 1024 * 1024 }
})

const uploadImage = upload.single('coverImage')


const getNote = async (req,res) =>{
  try{
    const id = req.params.note_id
    const note = await Note.findById(id)
    console.log(note)
  }catch(error){
    console.log(error)
  }
}

const postNote = async(req,res) => {
  try{
    if(req.file){
      req.body.imageCover = req.file.filename
    } 
    console.log(req.body)
    console.log(req.file)
    const newNote = await Note.create({imageCover: req.body.imageCover, title: 'Paring', journey: req.params.id})
    console.log(newNote)
    const id = newNote._id
    const journey = await Journey.findById(req.params.id)
    console.log('journey',journey)
  }catch(error){
    console.log(error)
  }
}


const postExpense = async(req,res) => {
  try{
    const id = req.params.id
    console.log('id', id)
    const newExpense = await Expense.create({journey: id})
    console.log(newExpense)
  }catch(error){
    console.log(error)
  }
}

const patchExpense = async(req, res) =>{
  try{
    console.log(newExpense._id)
    const expense = await Expense.findById(newExpense._id)
    expense.expenses.push(req.body)
    await expense.save()
    console.log(expense)
    console.log(req.params.id)
    console.log(req.body)
  }catch(error){
    console.log(error)
  }
}


const postJourney = async(req,res) =>{
  try{
    console.log('body',req.body)
    if(req.body.image){
      req.body.imageCover = req.body.image
    }
    req.body.createdBy = req.user._id
    const newJourney = await Journey.create(req.body)
    const journey_id = newJourney._id
    // Add Expense
    const newExpense = await Expense.create({journey: journey_id})
    console.log(newExpense)
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
    const journey = await (await Journey.findById(req.params.id).populate({ path: 'notes', model: Note}).populate({path: 'expenses', model: Expense}))
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



module.exports = { postJourney, postNote, getJourney, getMyAllJourneys , uploadImage, getNote, postExpense , patchExpense}