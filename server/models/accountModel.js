const mongoose = require('mongoose')
const accountSchema = new mongoose.Schema(
  {
    provider:{
      type: String,
    },
    name: {
      type: String,
      required: [true, 'Please tell us your name'],
    },
    avatar:{
      type: String
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    token: {
      type: String,
      required: true,
    }
  },{
    timestamps: true
  }
)


const Account = mongoose.model('Account', accountSchema)

module.exports = Account
