const express = require("express");
const bodyParser = require("body-parser");

const productRoutes = require("./routes/product");
const checkoutRoutes = require("./routes/checkout");

const app = express();
// A random middleware
app.use((req, res, next) => {
  console.log("In the middleware!");
  next();
});
app.use(bodyParser.urlencoded({ extended: false }));

app.use(productRoutes);
app.use(checkoutRoutes);

// A 404 middleware
app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>");
});

app.listen(3000);
