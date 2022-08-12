const express = require('express')
const router = express.Router()

const loginController = require('../controllers/loginController')
const jwkController = require('../controllers/jwkController')

router.get('/', loginController.index)

router.get('/.well-known/jwks', jwkController.index)

module.exports = router
