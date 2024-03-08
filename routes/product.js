const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("<h1>Products!</h1>");
});

module.exports = Router;
