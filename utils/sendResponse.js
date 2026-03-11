export const sendResponse = (res, status, header, data) => {
  res.setHeader('Content-Type', header)
  res.statusCode = status
  res.end(data)
}