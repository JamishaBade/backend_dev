const http = require("http");
const requestHandling=require('./parsingAdvanced.js'); //importing the module that handles the request and response
server = http.createServer(requestHandling); //creating the server using the imported module

server.listen(3006, () => console.log("http://localhost:3006"));
