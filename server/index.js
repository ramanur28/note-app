const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const router = require("./router/router");
const cors = require("cors");
const port = "8080";
const cookieParser = require("cookie-parser");

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

const db = "mongodb://0.0.0.0:27017";

mongoose
  .connect(db, { useNewUrlParser: true })
  .catch((err) => {
    console.error(err);
    console.log("gagal terhubung ke database");
  })
  .then(console.log("sukses terkoneksi ke database"));

app.use("/", router);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
