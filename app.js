const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app = express()

app.use(morgan('combined'))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/', (req, res, next) => {
  console.log(req.body)
  res.json({
    "response_type": "in_channel",
    text:'got it!!!'
  })
})

module.exports = app
