const express = require('express')
const router = express.Router()
const {postJourney,getJourney, getMyAllJourneys } = require('../controllers/journeyController.js')
const {protect} = require('../middleware/authMiddleware')
router.post('/',postJourney)
router.get('/', protect, getMyAllJourneys)
router.route('/:id').get(getJourney)

module.exports = router