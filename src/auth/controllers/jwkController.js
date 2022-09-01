const fs = require('fs')
const rsaPemToJwk = require('rsa-pem-to-jwk')

/**
 * JWK Endpoint request handler.
 *
 * @param {express.Request} _request Current http request context.
 * @param {express.Response} response Current http response context.
 * @description Provides public JWKs. Remark normalization of EOL, due to internal mishandling
 * in encoding dependency package.
 */
exports.index = function (_request, response) {
  // todo: use cache instead
  // todo: use async instead
  // todo: move to security service instead
  const buffer = fs.readFileSync('./certs/private.pem')
  const secret = buffer.toString().replace(/\r\n/g, '\n')
  const jwk = rsaPemToJwk(secret, { use: 'sig' }, 'public')

  response.send({
    keys: [
      jwk
    ]
  })
}
