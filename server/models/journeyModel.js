const mongoose = require('mongoose')

const journeySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true,'Please give this journey a name']
  },
  imageCover:{
    type: String,
  },
  startDate:{
    type: Date,
    required: [true, 'Please write your starting date.']
  },
  endDate:{
    type: Date,
    required: [true, 'Please write your ending date']
  },
  locations:[{
    type:{
      type:String,
      default: 'Point',
      enum: ['Point']
    },
    coordinates: [Number],
    address: String,
    description: String,
    day: Number,
    sequence: Number
  }],
  notes:{
    type: mongoose.Schema.ObjectId,
    ref: 'Note'
  },
  editSetting: Boolean,
  sharingSetting: Boolean,
  createdBy:{
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  participants: [{
    type: mongoose.schema.ObjectId,
    ref: 'User'
  }],
  expenses:[{
    title:{
      type: String,
      default: 'lunch'
    },
    date: {
      type: Date,
      default: Date.now().getDate()
    },
    category:{
      type: String,
      default: 'transportation'
    },
    paidBy:{
      type: mongoose.Schema.ObjectId,
      ref: 'User'
    },
    sharedBy:[{
      type: mongoose.Schema.ObjectId,
      ref: 'User'
    }],
    amount:{
      type: Number
    },
    paymentMethod:{
      type: String,
    },
    currency:{
      type: String
    }
  }]

})



journeySchema.pre('/^find/', function(next){
  this.populate({
    path: 'createdBy',
    select: '-password -passwordChangedAt'
  })
  next()
})

const Journey = mongoose.model('Journey', journeySchema)

module.exports = Journey