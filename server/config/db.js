import mongoose from "mongoose";
import "colors";

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));
db.once("open", function () {
  console.log("connected to mongodb database".bgCyan.white);
});

import "../models/categoryModel.js";
