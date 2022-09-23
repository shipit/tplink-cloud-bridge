const express = require('express')
const app = express()
const port = 4000

const respond = function (res, { payload }) {
  res.setHeader('Content-Type', 'application/json')
  res.send(payload)
}

app.get('/', (req, res) => {
  const payload = {
    message: 'take me to your leader',
    'one-last-thing': 'think, different',
  }
  respond(res, { payload })
})

app.listen(port, () => {
  console.log(`Monster bridge started on ${port}`)
})
