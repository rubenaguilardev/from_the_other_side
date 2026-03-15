import path from 'node:path'
import fs from 'node:fs/promises'
import { sendResponse } from './sendResponse.js'
import { getContentType } from './getContentType.js'

const serveStatic = async (req, res, dir) => {

  const publicDir = path.join(dir, 'public')
  const filePath = path.join(publicDir, req.url === '/' ? 'index.html' : req.url)

  const ext = path.extname(filePath)

  try {
    const content = await fs.readFile(filePath)
    sendResponse(res, 200, getContentType(ext), content)
  }catch(err) {
    if (err.code === 'ENOENT') {
      const content = await fs.readFile(path.join(publicDir, '404.html'))
      sendResponse(res, 404, 'text/html', content)
    } else {
      sendResponse(res, 500, 'text/html', '<html><h1>Server Error: ${err.code}</h1></html>')
    }
  }

}

export default serveStatic