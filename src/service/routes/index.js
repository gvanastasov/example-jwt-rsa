const express = require('express')
const httpErrors = require('http-errors')

/**
 * Configures endpoints for server router.
 *
 * @param {express.Router} router Express router to configure.
 */
function configureRoutes (router) {
  router.get(routes.index, function (_request, response) {
    response.json({ domain: 'public' })
  })

  router.get(routes.protected, function (_request, response) {
    response.json({ domain: 'protected' })
  })
}

/**
 * Fallback route handler.
 *
 * @param {express.Request} _request Current http request context.
 * @param {express.Response} _response Current http response context.
 * @param {express.NextFunction} next Callback to exit middleware.
 * @description A catch all route.
 */
function fallbackRouteHandler (_request, _response, next) {
  next(httpErrors.NotFound())
}

/**
 * Simple route table.
 */
const routes = {
  index: '/',
  protected: '/protected'
}

const router = express.Router()
configureRoutes(router)

exports.router = router
exports.routes = routes
exports.fallbackRouteHandler = fallbackRouteHandler
