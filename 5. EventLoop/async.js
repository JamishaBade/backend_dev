const fs = require("fs");

fs.readFile("file.txt", "utf8", (err, data) => { // non blocking because the event loop can continue running while the file is being read by the os 
  console.log(data);
});

console.log("This runs IMMEDIATELY");

