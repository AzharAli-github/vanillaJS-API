import { createServer } from 'http'
const PORT = process.env.PORT || 4000;
//create server - return a server object
const server = createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'Hello !!!'})
})
//make the server liten for clients
//event emitter model
//server -> emits a listen event , port no etc

server.listen(PORT, () => {
    console.log("Server is ready and listening as port", PORT)
})
server.on('error', (error) => {
    if(error.code === 'EADRINUSE')
        {
            console.log('Port already in')
        }
})