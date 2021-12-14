const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./src/routes/index");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");

mongoose
  .connect("mongodb://localhost:27017/myapp")
  .then(() => console.log("MONGODB CONNECTED"));

app.use(cors());
app.use(bodyParser.json());

app.use("/", router);

app.listen(4000, () => {
  console.log("Server is runing on 4000");
});
