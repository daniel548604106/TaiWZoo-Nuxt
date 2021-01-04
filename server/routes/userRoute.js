const express = require('express')
const router = express()
const { userSignup ,userLogin ,getMyData, patchMyData, uploadUserPhoto, uploadToImageKit} = require('../controllers/userController')
const {protect} = require('../middleware/authMiddleware')
router.post('/signup', userSignup)
router.post('/login', userLogin)
router.route('/profile').get(protect , getMyData).patch(protect,uploadUserPhoto,uploadToImageKit, patchMyData)

module.exports = router
