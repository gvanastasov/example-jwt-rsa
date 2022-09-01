// Global dependencies
const shell = require('shelljs')
const fs = require('fs')

/**
 * Generator
 *
 * @description Runs a shell script for (re)generating private-public
 * RSA key pair via openssl.
 */
function generate () {
  shell.echo('Generating certs started...')

  if (!shell.which('openssl')) {
    shell.echo('Error: this script requires openssl...')
    shell.exit(1)
  }

  if (fs.existsSync('./certs/private.pem') || fs.existsSync('./certs/public.pem')) {
    shell.echo('Removing existing certs...')
    shell.rm('-r', 'certs/*.pem')
  }

  shell.exec('openssl genrsa -out certs/private.pem 2048')
  shell.exec('openssl rsa -in certs/private.pem -pubout -out certs/public.pem')

  shell.echo('Generating certs successful!')
}

generate()
