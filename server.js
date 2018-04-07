const express = require("express");
const path = require("path");

const app = express();

// Setup for main site static files
app.use(express.static(path.join(__dirname, 'public/')));

const port = process.env.PORT || 5002;

app.listen(port, ()=>{
  console.log("listening on port", port)
})