// const User = require('../models/userModel')
const userSignup = async (req, res) => {
  console.log(req.body)
  res.status(200).json({
    status: 'success',
    message: 'hello',
  })
}

module.exports = { userSignup }
