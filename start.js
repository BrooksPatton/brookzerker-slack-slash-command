require('dotenv').config()
const app = require('./app')

const port = process.env.PORT

app.listen(port, () => {
  console.info('Slack app running on port', port)
})
