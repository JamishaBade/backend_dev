const fs = require("fs");

const data = fs.readFileSync("file.txt", "utf8"); // BLOCKING
console.log(data);

console.log("This runs AFTER file is fully read");
