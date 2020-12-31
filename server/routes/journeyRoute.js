const express = require('express')
const route = express.Router()
const {postJourney,getJourney } = require('../controllers/journeyController.js')
const router = require('./userRoute.js')

router.route('/').post(postJourney)
router.route('/:id').get(getJourney)

module.exports = route