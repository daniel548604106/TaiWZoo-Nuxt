const express = require('express')
const router = express.Router()
const { getAllUsers, getUser } = require('../controllers/adminController.js')
const { protect , admin } = require('../middleware/authMiddleware.js')



router.route('/users').get(protect, admin, getAllUsers)
router.route('/users/:id').get(protect, admin, getUser)


module.exports = router