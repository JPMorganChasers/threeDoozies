const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri);
//   console.log("mongoose connection err");
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("connected to MongoDB");
});

app.listen(PORT, () => {
  console.log(`connected to port ${PORT}`);
});
