require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT

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

app.listen(port, () => {
  console.info('Slack app running on port', port)
})
