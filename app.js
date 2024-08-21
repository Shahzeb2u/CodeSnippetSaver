const express = require("express");

const path = require("path");

methodOverride = require("method-override");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));

app.use("/images", express.static("public/images/"));

const dashboard = require("./controllers/routes/dashboard");

app.use("/dashboard", dashboard);
// app.use("/dahsboard", dashboard);
// const con = require( "./core/pool" ); // required to connect to db

app.use((req, res) => {
  // res.redirect( "/login" )
});

let port = process.env.PORT || 3000;

let clc = require("cli-color");

app.listen(port, function () {
  console.log(
    `${clc.white.bgGreen(
      process.env.APP_NAME
    )} Server is now running on port ${port}...`
  );
});

module.exports = app;
