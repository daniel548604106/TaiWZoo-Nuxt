const express = require('express')
const router = express.Router()
const {googleAuth } = require('../controllers/authController.js')


// router.post('/facebook',facebookAuth)
router.post('/google', googleAuth)
// router.route('/line')




module.exports = router