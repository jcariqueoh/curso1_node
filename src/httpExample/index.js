const http = require('http')
const PORT = 3000

const server = http.createServer((req, res) =>{
    console.log('method:',req.method)
    console.log('url:',req.url)

    if (req.method === 'GET')
        res.write('You have used GET method')
    else if (req.method === 'POST')
        res.write('You have used POST method')

    res.end()    
})

server.listen(PORT, () =>{
    console.log(`server runnig at port ${PORT}`)
})