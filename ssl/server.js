const { createServer: createHttpsServer } = require('https')
const { createServer: createHttpServer } = require('http')
const { parse } = require('url')
const next = require('next')
const fs = require('fs')
const path = require('path')

const dir = path.join(__dirname)

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, dir })
const handler = app.getRequestHandler()

if (!dev) {
  const { config } = require('./.next/required-server-files.json')
  process.env.__NEXT_PRIVATE_STANDALONE_CONFIG = JSON.stringify(config)
}

const httpsOptions = {
  cert: fs.readFileSync(process.env.SSL_CERTIFICATE_FILE),
  key: fs.readFileSync(process.env.SSL_CERTIFICATE_KEY_FILE),
}

app.prepare().then(() => {
  // HTTPS server
  createHttpsServer(httpsOptions, (req, res) => {
    const parsedUrl = parse(req.url, true)
    handler(req, res, parsedUrl)
  }).listen(443, () => {
    console.log('> Server listening at https://localhost')
  })

  // HTTP server for redirection
  createHttpServer((req, res) => {
    res.writeHead(301, { Location: `https://${req.headers.host}${req.url}` })
    res.end()
  }).listen(80, () => {
    console.log('> Server Redirecting HTTP to HTTPS')
  })
})
