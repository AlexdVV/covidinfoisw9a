const express = require("express");
const bodyParser = require("body-parser");
const userRoute = require("./routes/user");
const climaRoute = require("./routes/proyecto");
const casoRoute = require("./routes/Caso");
const verifyToken = require("./middleware/auth");
const InitiateMongoServer = require("./config/db");

// Initiate Mongo Server
InitiateMongoServer();

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});
// PORT
const PORT = process.env.PORT || 3000;

// Middleware
//app.use(bodyParser.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

/**
 * Router Middleware
 * Router - /user/*
 * Method - *
 */
//
app.use("/user", userRoute);
app.use("/clima", climaRoute);
app.use("/caso", casoRoute);

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});
