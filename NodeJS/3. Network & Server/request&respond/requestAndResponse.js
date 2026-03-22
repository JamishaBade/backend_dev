const moduleHttp= require("http"); //this creates the http module called moduleHttp
const server =moduleHttp.createServer((req,res)=>{ // this creates the actual server thorugh the http module object "moduleHttp"
console.log(req.url, req.method, req.headers); // prints req related stuff in the console
process.exit(); //stops the server 

});
const port=3005; //port number where the server is going to run 
server.listen(port, ()=>{console.log(`https://localhost:${port}`)}) // This starts the server in the port 3001