const http=require("http");
const server = http.createServer((req,res)=>{
  console.log(req.url);
  console.log(req.method);
  res.setHeader('Content-Type', 'text/html'); // this line sets the content type of the response to HTML
  res.write('<h1>Hello world</h1><p> we love life</p>');
  res.write('<p> WE LOCkING in. TO run this just do node filename </p>')
  res.end();
  process.exit();
}
);
const PORT=3000;
server.listen(PORT, ()=>{console.log(`http://localhost:${PORT}`)}); //remember its only http, not https (it will give an error)
