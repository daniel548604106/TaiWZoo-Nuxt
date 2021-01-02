const express = require('express')
const router = express.Router()
const {postJourney,getJourney, getMyAllJourneys,postNote,uploadImage } = require('../controllers/journeyController.js')
const {protect} = require('../middleware/authMiddleware')




router.post('/',postJourney)
router.get('/', protect, getMyAllJourneys)
router.route('/:id').get(getJourney)
router.route('/:id/note').post(uploadImage, postNote)
module.exports = router