"use strict";

const express = require("express");
const app = express();
const port = process.env.PORT_NO || 3000;

app.use(express.static("public"));

app.set("views", "./views");
app.set("view engine", "ejs");

let variableB =
  "Camille est une super camarade, je l'aime beaucoup elle est super sympa, en plus ses cheveux courts ça lui va super bien.";

app.get("/", (req, res) => {
  res.render("index", {
    variable: variableB,
  });
});

app.listen(port);