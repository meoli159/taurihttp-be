const express = require("express");
const app = express();
const port = 3333;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:1420");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/", (req, res) => {
  res.json("Hello, World!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
