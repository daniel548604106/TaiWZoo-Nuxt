const express = require('express')
const app = express()
const port = 3001
const https = require('https');
const fs = require('fs');

const httpsOptions = {
  key: fs.readFileSync("./localhost+2-key.pem"),
  cert: fs.readFileSync("./localhost+2.pem")
};

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
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

//Route Controller

const userRoutes = require('./server/routes/userRoute.js')
const adminRoutes = require('./server/routes/adminRoute.js')
const journeyRoutes = require('./server/routes/journeyRoute.js')

app.use('/api/v1/users', userRoutes)
app.use('/api/v1/admin', adminRoutes)
app.use('/api/v1/journey', journeyRoutes)

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })

https.createServer(httpsOptions, app).listen(3001);
