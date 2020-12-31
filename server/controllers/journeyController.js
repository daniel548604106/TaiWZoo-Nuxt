const Journey = require('../models/journeyModel.js')


const postJourney = async(req,res) =>{
  try{
    // const { imageCover, name, startDate, endDate, sharingSetting, editSetting, participants} = req.body
    const newJourney = await Journey.create(req.body)
    console.log(newJourney)
    res.status(200).json({
      status: 'success',
      newJourney
    })
  }catch(error){
    console.error(error)
    res.status(400).json({
      message: error
    })
  }
}


const getJourney = async(req,res) =>{
  try{
    const journey = await Journey.findById(req.params.id)
    console.log(journey)
    res.status(200).json({
      status: 'success',
      journey
    })
  }catch(error){
    console.error(error)
    res.status(400).json({
     status: 'fail',
     error
    })
  }
}



module.exports = { postJourney,getJourney }