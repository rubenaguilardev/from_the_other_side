import http from 'node:http'
import serveStatic from './utils/serveStatic.js'

const PORT = 8000

const dirname = import.meta.dirname

const server = http.createServer((req, res) => {

  serveStatic(dirname)
  res.setHeader('Content-Type', 'text/html')
  res.statusCode = 200
  res.end('<html><h1>The server is working</h1></html>')
})

server.listen(PORT, () => console.log(`server running on port ${PORT}`))