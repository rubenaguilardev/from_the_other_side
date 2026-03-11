import path from 'node:path'

const serveStatic = (dir) => {
  const filePath = path.join(dir, 'public', 'index.html')
  console.log(filePath)
}

export default serveStatic