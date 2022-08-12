const jwt = require('jsonwebtoken')
const fs = require('fs')

exports.index = function (_request, response) {
  // todo: add user validation, for now we simply assume everyone can get a valid token.

  // todo: use async instead
  const secret = fs.readFileSync('./certs/private.pem')
  const payload = {}
  const token = jwt.sign(payload, secret, { expiresIn: '60min', algorithm: 'RS256' })

  response.send({ token })
}
