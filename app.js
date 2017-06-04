const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const nextStream = require('./nextStream')

const app = express()

app.use(morgan('combined'))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/', (req, res, next) => {
  const day = nextStream.get()

  res.json({
    "response_type": "ephemeral",
    text: `The next stream is scheduled for ${day} at 8pm MDT`
  })
})

module.exports = app
