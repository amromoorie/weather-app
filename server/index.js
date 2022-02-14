const dotenv = require('dotenv')
dotenv.config()

// Start up an instance of app
const express = require('express')
const app = express()

// Cors for cross origin allowance
const cors = require('cors')
app.use(cors())

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// designates what port the app will listen to for incoming requests
const PORT = 8080
app.listen(PORT, (err) => {
  if (err) throw new Error(err)
  console.log(`Server is listening on port ${PORT}!`)
})

// app.get('/test', function (req, res) {
//     res.send(mockAPIResponse)
// })

const mainPage = app.get('/', function (req, res) {
  res.send('hello world!')
})
