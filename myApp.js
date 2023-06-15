let express = require("express");
let dotenv = require("dotenv").config();

let app = express();
app.use(express.static(__dirname + "/public")); // mount in general
app.use("/public", express.static(__dirname + "/public")); // mount to /public specifically

app.use(function (req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE !== "uppercase") {
    res.json({
      message: "Hello json",
    });
  } else {
    res.json({
      message: "HELLO JSON",
    });
  }
});

app.get(
  "/now",
  function (req, res, next) {
    req.time = new Date().toString();
    next();
  },
  (req, res) => res.send({ time: req.time })
);

module.exports = app;
