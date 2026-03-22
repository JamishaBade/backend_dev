const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") { //req is always a GET request unless specified otherwise
    res.write(`
      <html>
        <head><title>Home</title></head>
        <body>
          <h1>Home Page</h1>
          <form action="/submit-details" method="POST">
            <input type="text" name="username" placeholder="Enter name" />
            <button type="submit">Send</button>
          </form>
        </body>
      </html>
    `);
    return res.end();
  }

  if (req.url === "/submit-details" && req.method === "POST") {
    const body = [];

    req.on("data", chunk => 
        {
            console.log("CHUNK RECEIVED:", chunk); // logs each chunk of data received (data comes in chunks bc its a stream)
           // body.push(chunk.toString()); This didnt work because toString converts the chunk into a string and when we use Buffer.concat later it expects buffer objects not strings
            body.push(chunk);


        });

    req.on("end", () => {
      const data = Buffer.concat(body).toString(); // combining all the chunks of data into one buffer (kinda like a basic parsing ig (parsing is when the raw data is converted into a readable format that will be used in the program))
      console.log("POSTED:", data); // logs the form data to the console

      res.end("Form submitted successfully");
    });
    return;
  }

  res.statusCode = 404;
  res.end("Not Found");
});

server.listen(3006, () => console.log("http://localhost:3006"));
