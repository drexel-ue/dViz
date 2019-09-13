const express = require("express");
const app = express();
const path = require("path");

const http = require("http");

const cors = require("cors");

const port = process.env.PORT || 8080;

app.set("views", path.join(__dirname, "client", "dist"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "/client/dist")));

app.use(cors());

app.get("/", (_, res) => {
  res.render("index");
});

const server = http.Server(app, () => console.log("welcome to dViz"));

server.listen(port);
