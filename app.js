const express = require('express')
const app = express()
const port = 3001
const cors = require('cors')
const router = express.Router()

app.use(express.json())
app.use(cors())

const userRoutes = require('./server/routes/userRoute.js')

app.use('/api/v1/users', userRoutes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
