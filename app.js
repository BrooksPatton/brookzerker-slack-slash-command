require('dotenv').config()
const express = require('express')
const morgan = require('morgan')

const app = express()
const port = process.env.PORT

app.use(morgan('combined'))

app.post('/', (req, res, next) => {
  res.send('got it!!!')
})

app.listen(port, () => {
  console.info('Slack app running on port', port)
})
