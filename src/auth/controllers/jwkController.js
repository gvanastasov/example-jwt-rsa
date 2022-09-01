const fs = require('fs')
const rsaPemToJwk = require('rsa-pem-to-jwk')

exports.index = function (_request, response) {
  // todo: use cache instead

  // todo: use async instead
  const buffer = fs.readFileSync('./certs/private.pem')
  const secret = buffer.toString().replace(/\r\n/g, '\n')
  const jwk = rsaPemToJwk(secret, { use: 'sig' }, 'public')

  response.send({
    keys: [
      jwk
    ]
  })
}
