const express = require('express');
const path = require('path');
const logger = require('morgan');
const routes = require("./controllers/applicationController.js");
const exphbs = require("express-handlebars");
// const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000;
const app = express();

// Set Handlebars.
// view engine setup
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});