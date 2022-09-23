const express = require('express')
const { gitDescribeSync } = require('git-describe')

const app = express()
const port = 4000

const respond = function (res, { payload }) {
  res.setHeader('Content-Type', 'application/json')
  res.send(payload)
}

app.get('/', (req, res) => {
  const message = 'take me to your leader'
  const version = gitDescribeSync().hash
  const payload = { message, version }
  respond(res, { payload })
})

app.listen(port, () => {
  console.log(`Monster bridge started on ${port}`)
})
