const http =require('http'); //loads the node's built-in module "http"

//Creates the actual server  (req and res is the automatic parameter)
const server= http.createServer((req, res)=>{ //arrow function used
  console.log(req); // this is runned everytime the user visits the server
  process.exit(); //kills the terminal
});
const port=3000; //port number
server.listen(port, ()=>{console.log(`Server running on http://localhouse:${port}`)}); // the console.log is runned once when the server starts. 