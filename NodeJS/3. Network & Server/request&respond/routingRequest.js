const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Jamisha Bade</title></head>");

  if (req.url === "/") {
    res.write("<body><h1>Welcome to my homepage</h1></body>");
    res.write("</html>");
    return res.end();
  }

  if (req.url.toLowerCase() === "/about") {
    res.write(
      "<body><h1>About Jamisha Bade</h1><p>MARCH 1st gotta be my second fav day ;)</p></body>"
    );
    res.write("</html>");
    return res.end();
  }

  res.write(
    "<body><h1>I miss nepalalalaldjflksdjfksdjkf</h1></body>"
  );
  res.write("</html>");
  return res.end();
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
