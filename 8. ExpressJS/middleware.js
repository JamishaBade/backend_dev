const express = require('express');
const app = express();

//root route

// First middleware for "/"
app.get("/", (req, res, next) => {
    console.log("This is the first middleware", req.url, req.method);
    next(); // move to next middleware
});

// Second middleware for "/"
app.get("/", (req, res) => {
    console.log("This is from another middleware", req.url, req.method);
    res.send("<p>Came from another Middleware</p>");
});


// submit details route

// First middleware for "/submit-details"
app.get("/submit-details", (req, res, next) => {
    console.log("This is a new first middleware", req.url, req.method);
    next(); // move to next middleware
});

// Second middleware for "/submit-details"
app.get("/submit-details", (req, res) => {
    console.log("This is a second routing middleware", req.url, req.method);
    res.send("<p>This is the second middleware for submit details</p>");
});


//server

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
});