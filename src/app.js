const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const helpers = require("./views/helpers/index");
const controllers = require("./controllers");

const app = express();

//middleware

//set up view engine();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.engine(
  "hbs",
  handlebars({
    extname: "hbs",
    layoutsDir: path.join(__dirname, "views", "layouts"),
    partialsDir: path.join(__dirname, "views", "partials"),
    defaultLayout: "main",
    helpers: helpers
  })
);
app.use(bodyParser.urlencoded({ extended: false }));

app.set("port", process.env.PORT || 3000);
app.use(favicon(path.join(__dirname, "..", "public", "logo.ico")));
app.use(express.static("public"));
app.use(controllers);

module.exports = app;
