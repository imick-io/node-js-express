const http = require("http");
const express = require("express");

const app = express();

// First middleware
app.use((req, res, next) => {
  console.log("In the middleware!");
  next();
});

// Second middleware
app.use((req, res, next) => {
  console.log("In another middleware!");
  res.send("<h1>Hello from Express!</h1>");
});

const server = http.createServer(app);

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
