const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config()

const connectDB = async() =>{
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    console.log(`MONGODB connected:${conn.connection.host}`)
  } catch (error) {
    console.log(error)
  }
}

module.exports = connectDB