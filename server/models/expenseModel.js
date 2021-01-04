const mongoose = require("mongoose")

const expenseSchema = new mongoose.Schema({
  journey:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Journey'
  },
  total:{
    type: Number
  },
  sharedWith:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  expenseList: [
    {
      date:{
        type: Date,
        default: Date.now()
      },
      name: {
        type: String,
        default: 'Lunch'
      },
      category:{
        type: String
      },
      amount: {
        type: Number,
        default: 0,
      },
      currency: String,
      paymentType: {
        type: String,
        default: 'cash'
      },
      paidBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
      sharedWith: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }]
    }
  ]
},{
  timestamps: true,
  toJSON: {virtuals:true},
  toObject: {virtuals: true},
  id:false
})




const Expense = mongoose.model('Expenses', expenseSchema)

module.exports = Expense