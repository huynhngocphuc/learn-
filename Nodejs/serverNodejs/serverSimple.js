

const http = require('http')
const port = 8000
const dataDummyResponse = {
    token: 'abcxyx'
}
const server = http.createServer((req, resp)=>{
    let body = ''
    req.on('data', chunk  => {
        body = chunk
        console.log("🚀 ~ req.on ~ data:", body,chunk)
    })
    req.on('end', ()=>{
        resp.statusCode = 500
        resp.end(JSON.stringify(body))
    })
})

server.listen(port, 'localhost', ()=>{
    console.log(`🚀 ~ server is running in port ${port} `)
    
})