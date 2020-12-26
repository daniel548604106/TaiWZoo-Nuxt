const express = require('express')
const router = express()
const { userSignup ,userLogin ,getMyData, patchMyData} = require('../controllers/userController')
const {protect} = require('../middleware/authMiddleware')
router.post('/signup', userSignup)
router.post('/login', userLogin)
router.route('/profile').get(protect , getMyData).patch(protect, patchMyData)

module.exports = router
