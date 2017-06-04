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
  if(req.body.text === 'next stream') {
    const day = nextStream.get()

    res.json({
      "response_type": "ephemeral",
      text: `The next stream is scheduled for ${day} at 8pm MDT`
    })
  } else {
    res.json({
      response_type: 'ephemeral',
      text: `Sorry, I couldn'nt understand you :sad:`
    })
  }
})

module.exports = app
