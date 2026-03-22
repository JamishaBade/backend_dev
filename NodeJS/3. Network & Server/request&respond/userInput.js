const http = require("http");
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>User Input</title></head>");
  res.write("<body><h1>Enter Your Details</h1>");
  res.write("<form>");
  res.write(
    '<input type="text" name="username" placeholder="Enter your name"><br>'
  );
  res.write("");
  res.write(
    '<input type="email" name="email" placeholder="Enter your email"><br>'
  );
  res.write('<label for="male">Male</label>')
  res.write('<input type="radio" id="male" name="gender" value="male">'); 
  res.write('<label for="male">Female</label>')
  res.write('<input type="radio" id="female" name="gender" value="female">')
  res.write("</form>");
  return res.end();
});
const PORT = 3002;
server.listen(PORT,()=>{console.log(`http://localhost:${PORT}`)});
