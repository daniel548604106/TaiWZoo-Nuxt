const express = require('express')
const app = express()
const port = 3001
const cors = require('cors')
const router = express.Router()
const connectDB = require('./server/lib/db.js')
const dotenv = require('dotenv')

// Basic Setup
dotenv.config()
connectDB()


// Route Config
app.use(express.json())
app.use(cors())


//Route Controller

const userRoutes = require('./server/routes/userRoute.js')

app.use('/api/v1/users', userRoutes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
