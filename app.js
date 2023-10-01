const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

//middlewares
app.use(express.json());
app.use(
  cors({
    credentials: true,
  })
);

app.set("view engine", "ejs");

// set static folder
app.use(express.static(path.join(__dirname, "public")));

//handle form data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes

const serviceRoute = require("./routes/api/v1/service.route");

app.get("/", (req, res) => {
  res.render("index");
});

// posting to database

app.use("/api/v1/service", serviceRoute);

module.exports = app;
