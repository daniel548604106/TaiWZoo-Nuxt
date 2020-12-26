const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please tell us your name'],
    },
    account:{
      type: String,
      lowercase: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    biography:{
      type: String,
      default: ''
    },
    avatar:{
      type:String,
      default: ''
    },
    gender:{
      type:String,
      default: '',
    },
    isAdmin:{
      type:Boolean,
      required: true,
      default: false
    },

  },
  {
    timestamps: true,
  }
)

userSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}
userSchema.pre("save", async function(next) {
  // 如果今天使用者更改其他個人資訊但沒有做密碼更改，就直接 save
  // User.create 就是 .save
  if (!this.isModified("password")) {
    next()
  }
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
  next()
})

const User = mongoose.model('User', userSchema)

module.exports = User
