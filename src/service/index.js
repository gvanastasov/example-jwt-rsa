// Global dependencies
const express = require('express')
const { expressjwt: jwt } = require('express-jwt')
const cors = require('cors')

const { green } = require('../utils/console')
const { openBrowser } = require('../utils/server')

// Local dependencies
const { router, routes, fallbackRouteHandler } = require('./routes/index')

// Init
const app = express()
const hostname = 'localhost'
const port = 3002

// Configuring body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Configuring security
app.use(cors())
app
  .use(
    jwt({
      secret: 'aa',
      algorithms: ['RS256']
    })
      .unless({
        path: [routes.index]
      })
  )

// Configuring routing
app.use('/', router)
app.use(fallbackRouteHandler)

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
