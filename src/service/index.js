const express = require('express')

const app = express()
const port = 3000

app.get('/', (request, response) => {
  response.send('Hello world')
})

app.listen(port, () => {
  console.log('Listen on the port 3000...')

  try {
    const url = 'http://localhost:3000'
    const start = (process.platform === 'darwin'
      ? 'open'
      : process.platform === 'win32'
        ? 'start'
        : 'xdg-open')
    require('child_process').exec(start + ' ' + url)

    console.log('Browser session started...')
  } catch {
    console.log('Unable to open browser...')
  }
})
