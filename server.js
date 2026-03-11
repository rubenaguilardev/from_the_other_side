import http from 'node:http'
import serveStatic from './utils/serveStatic.js'

const PORT = 8000

const dirname = import.meta.dirname

const server = http.createServer( async (req, res) => {
  await serveStatic(req, res, dirname)
})

server.listen(PORT, () => console.log(`server running on port ${PORT}`))