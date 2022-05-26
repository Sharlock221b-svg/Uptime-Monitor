/*
* Primary File for an API
*/

//Dependencies
const http = require('http')

//Creating a server and making it response to any request
const server = http.createServer( (req, res) => res.end("Hello World!!"));

//Making server listen
server.listen(3000, () => console.log("Listining on port 3000"));