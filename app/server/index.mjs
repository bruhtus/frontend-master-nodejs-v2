import http from 'http'

const host = 'localhost'
const port = 8000

const server = http.createServer((request, response) => {
  if (request.method === 'POST') {
    let body = ''

    request.on('data', chunk => {
      body += chunk
    })

    request.on('close', () => {
      console.log(body)
    })

    response.writeHead(201)
    response.end('ok')

  } else {
    response.writeHead(200)
    response.end('hi')
  }
})

server.listen(port, host, () => {
  console.log(`Server on ${host}:${port}`)
})
