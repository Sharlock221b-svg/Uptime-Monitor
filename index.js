/*
* Primary File for an API
*/

//Dependencies
const http = require('http')
const url = require('url')


//Creating a server and making it response to any request
const server = http.createServer( (req, res) => {
    //Parsing the URL
    const parsedUrl = url.parse(req.url, true);

    //Getting the path
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');

    //Getting the request method
    const method = req.method.toUpperCase();
    
    //Returning the response
    res.end('Hello World');

    //logging the path
    console.log('Request received on Path:', trimmedPath, 'using method:', method);
});

//Making server listen
server.listen(3000, () => console.log("Listining on port 3000"));