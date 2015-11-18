'use strict'

const http = require('http')
const redis = require('redis')

const client = redis.createClient({
  host: 'redis'
});

const server = http.createServer()

if (!client.get('visits')) {
  client.set('visits', 1)
}

server.on('request', (req, res) => {
  console.log(req.url)

  if (req.url !== '/') return
  client.get('visits', (err, data) => {
    res.write(`Number of visits: ${data}`)
    res.end()
  })

  client.incr('visits')
})

server.on('listening', () => {
  console.log('listening on 4444....')
})

server.listen(4444)
