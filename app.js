const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const productRoutes = require("./routes/products");

const app = express();
// A random middleware
app.use((req, res, next) => {
  console.log("In the middleware!");
  next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/products", productRoutes);

// A 404 middleware
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
