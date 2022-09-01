// Global dependencies
const express = require('express')
const httpErrors = require('http-errors')
const cors = require('cors')

// Local dependencies
const { green } = require('../utils/console')
const { openBrowser } = require('../utils/server')
const indexRouter = require('./routes/index')

// Init
const app = express()
const hostname = 'localhost'
const port = 3001

// Configuring security
app.use(cors())

// Configuring body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Configuring routing
app.use('/', indexRouter)
app.use((_request, _response, next) => {
  next(httpErrors.NotFound())
})

// Start
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
