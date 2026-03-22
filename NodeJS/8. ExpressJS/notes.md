# ExpressJS
A minimal and flexible web appkication framework for Node.js
It provides a robust set of features for multipage, singlepage and hybird applications.
it basically simplifies server-side coding by providing a layer of fundamental web application.

- routing management
- middleware services
- API dev - efficient creation of RESTful apis
- community and plugins

## routing


## middleware
function that run between the request and response in server. 

- Purposes:

Logging requests
Parsing request bodies (express.json(), express.urlencoded())
Authentication & authorization
Error handling
- Key Points:
Middleware can be global (app.use()) or route-specific.
next() moves control to the next middleware in the chain.
Sending a response (res.send()) ends the cycle — following middleware won’t execute.


Application Layers
Most apps are built with three core layers:

Frontend — The user interface. HTML, CSS, React, buttons, forms.
Backend — The database and core logic. Where your users, orders, and product data live.
Middleware — The service layer that sits in between. It handles requests, processes logic, calls the database, can call external services, and sends responses back to the frontend.

## nodemon

Development tool for automatic server restarts when code changes.
Eliminates the need to manually stop and restart Node.js servers during development.
Watches .js, .json, .mjs, .ts files by default.
using: nodemon app.js



