// Global dependencies
const express = require('express')
const httpErrors = require('http-errors')
const cors = require('cors')

const { green } = require('../utils/console')
const { openBrowser } = require('../utils/server')

// Local dependencies
const indexRouter = require('./routes/index')

const app = express()
const hostname = 'localhost'
const port = 3001

app.use('/', indexRouter)

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
    openBrowser(url)
    console.log(`Browser session started at ${url}`)
  } catch {
    console.log(`Open browser session at ${url}`)
  }
})
