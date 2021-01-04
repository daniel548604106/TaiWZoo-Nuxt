const express = require('express')
const router = express.Router()
const {postJourney,getJourney,getNote, getMyAllJourneys,postNote,uploadImage, postExpense } = require('../controllers/journeyController.js')
const {protect} = require('../middleware/authMiddleware')
const { uploadJourneyCoverToImageKit, uploadJourneyCover } = require('../middleware/uploadMiddleware.js')



router.route('/').post(protect, uploadJourneyCover, uploadJourneyCoverToImageKit, postJourney)
router.get('/', protect, getMyAllJourneys)
router.route('/:id').get(getJourney)
router.route('/:id/expense').post(postExpense)
router.route('/:id/note').post(uploadImage, postNote)
router.route('/:id/note/:note_id').get(getNote)
module.exports = router