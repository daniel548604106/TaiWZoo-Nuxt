const mongoose = require('mongoose')


const noteSchema = new mongoose.Schema({
  imageCover: {
    type:String,
  },
  title:{
    type:String,
    required: [true, 'Please give your note a title']
  },
  content:[{
    sequence:{
      type: Number,
      default: 0
    },
    text: {
      type:String,
    },
    photos:[{
      type:String,
    }] 
  }]
})

const Note = mongoose.model('Note', noteSchema)

module.exports = Note