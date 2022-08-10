const express = require('express')
const httpErrors = require('http-errors')
const cors = require('cors')
const { green } = require('../utils/console')

const app = express()
const hostname = 'localhost'
const port = 3001

app.get('/', (_request, response) => {
  const data = { message: 'Hello world' }
  response.send(data)
})

app.use((_request, _response, next) => {
  next(httpErrors.NotFound())
})

app.use(cors())

// Configuring body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(port, () => {
  console.log(green('Service started successfully...'))
  const url = `http://${hostname}:${port}`

  try {
    const start = (process.platform === 'darwin'
      ? 'open'
      : process.platform === 'win32'
        ? 'start'
        : 'xdg-open')
    require('child_process').exec(start + ' ' + url)
    console.log(`Browser session started at ${url}`)
  } catch {
    console.log(`Open browser session at ${url}`)
  }
})
