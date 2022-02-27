import './forceLoadEnvConfig.js'



// require weather route
import weather from './routes/weather.js'
// start up an instance of app
import express from 'express'
const app = express()

// CORS for cross origin allowance
import cors from 'cors'
app.use(cors())

app.use(express.json())
// middleware for handling urlencoded form
app.use(express.urlencoded({ extended: true }))



// ROUTES
// app.use('/api', weather)
app.use('/fetch-weather-info', weather)

// designates what port the app will listen to for incoming requests
const PORT = 8080
app.listen(PORT, (err) => {
  if (err) throw new Error(err)
  console.log(`Server is listening on port ${PORT}!`)
})



 app.get('/', function (req, res) {
  res.send('hello world!')
})

