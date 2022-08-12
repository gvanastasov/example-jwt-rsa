const express = require('express')
const httpErrors = require('http-errors')

const router = express.Router()

const routes = {
  index: '/',
  protected: '/protected'
}

router.get(routes.index, function (_request, response) {
  response.json({ domain: 'public' })
})

router.get(routes.protected, function (_request, response) {
  response.json({ domain: 'protected' })
})

function fallbackRouteHandler (_request, _response, next) {
  next(httpErrors.NotFound())
}

exports.router = router
exports.routes = routes
exports.fallbackRouteHandler = fallbackRouteHandler
