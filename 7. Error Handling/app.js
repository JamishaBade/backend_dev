http=require("http");
const syntax=require("./syntax")
const runtime=require("./runtime")

const server=http.createServer((req,res)=>{
    console.log(req.url);
    runtime();
    syntax();
    res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Request received!");
})
const PORT=3001;

server.listen(PORT,()=>console.log(`http://localhost:${PORT}`));