const express = require('express')

const app = express()
const port = 3001

app.get('/', (request, response) => {
  response.send('Hello world')
})

app.listen(port, () => {
  console.log(`Listen on the port ${port}...`)

  try {
    const url = `http://localhost:${port}`
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
