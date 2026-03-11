import path from 'node:path'
import fs from 'node:fs/promises'
import { sendResponse } from './sendResponse.js'

const serveStatic = async (req, res, dir) => {

  const filePath = path.join(dir, 'public', 'index.html')

  try {
    const content = await fs.readFile(filePath)
    sendResponse(res, 200, 'text/html', content)
  }catch(err) {
    console.log(err)
  }

}

export default serveStatic