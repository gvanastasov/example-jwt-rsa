// Global dependencies
const jwt = require('jsonwebtoken')
const fs = require('fs')

/**
 * Authorization endpoint request handler.
 *
 * @param {express.Request} _request Current http request context.
 * @param {express.Response} response Current http response context.
 * @description Provides a signed jwt.
 */
exports.index = function (_request, response) {
  // todo: add user validation, for now we simply assume everyone can get a valid token.

  // todo: use cache instead
  // todo: use async instead
  // todo: move to security service instead
  const secret = fs.readFileSync('./certs/private.pem')
  const payload = {}
  const token = jwt.sign(payload, secret, { expiresIn: '60min', algorithm: 'RS256' })

  response.send({ token })
}
