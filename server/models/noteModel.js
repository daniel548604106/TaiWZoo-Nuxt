const mongoose = require('mongoose')


const noteSchema = new mongoose.Schema({
  journey:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Journey'
  },
  imageCover: {
    type:String,
  },
  title:{
    type:String,
    required: [true, 'Please give your note a title']
  },
  contents:[{
    text: {
      type:String,
    },
    image:[{
      type:String,
    }] 
  }]
},{
  timestamps: true,
  toJSON: {virtuals:true},
  toObject: {virtuals: true},
  id:false
})


// noteSchema.pre(/^find/, function(next){
//   this.populate({
//     path: 'journey',
//     select: '-createdBy'
//   })
//   next()
// })



const Note = mongoose.model('Note', noteSchema)

module.exports = Note