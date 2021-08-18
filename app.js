const express = require("express");
const path = require("path");
const app = express();
const expressHbs = require("express-handlebars");
const index = require("./routes/index");
const add = require("./routes/add");
app.engine(
  "hbs",
  expressHbs({
    layoutsDir: "views/layouts/",
    defaultLayout: "layout",
    extname: "hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", "views");

const ErrorController = require("./controllers/ErrorController");
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(index);
app.use(add);

app.use(ErrorController.Get404);

app.listen(4004);
