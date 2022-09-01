// Global dependencies
const express = require('express')

// Local dependencies
const loginController = require('../controllers/loginController')
const jwkController = require('../controllers/jwkController')

/**
 * Configures endpoints for server router.
 *
 * @param {express.Router} router Express router to configure.
 */
function configureRoutes (router) {
  router.get('/', loginController.index)
  router.get('/.well-known/jwks', jwkController.index)
}

const router = express.Router()
configureRoutes(router)

module.exports = router
