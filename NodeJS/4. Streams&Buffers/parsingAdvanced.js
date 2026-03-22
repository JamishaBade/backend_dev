const requestHandling =(req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.write(`
            <html>
              <head><title>Home</title></head>
              <body>
                <h1>Home Page</h1>
                <form action="/submit-details" method="POST">
                  <input type="text" name="username" placeholder="Enter name" />
                  <input type="text" name="email" placeholder="Enter email" />
                  <input type="text" name="school" placeholder="Enter school name" />
                  <input type="text" name="grade" placeholder="Enter grade level" />
                  <button type="submit">Send</button>
                </form>
              </body>
            </html>
          `);
    return res.end();
  }
  if (req.url === "/submit-details" && req.method === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      console.log("CHUNK RECEIVED:", chunk); // logs each chunk of data received (data comes in chunks bc its a stream)
      // body.push(chunk.toString()); This didnt work because toString converts the chunk into a string and when we use Buffer.concat later it expects buffer objects not strings
      body.push(chunk);
    });

    req.on("end", () => {
      const data = Buffer.concat(body).toString(); 
      console.log("POSTED:", data); 
    const params=new URLSearchParams(data); // parses the form data into key-value pairs, URLSeachParams is a built-in class in JavaScript.
    console.log(params)
    const bodyObject = Object.fromEntries(params); // converts the key-value pairs into a JavaScript object
    console.log("Parsed Object:", bodyObject);
      res.end("Form submitted successfully");
    });
    return;
  }

  res.statusCode = 404;
  res.end("Not Found");
};

module.exports=requestHandling; //exporting the module for use in other files