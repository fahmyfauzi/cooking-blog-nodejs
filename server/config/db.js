import mongoose from "mongoose";
import "colors";
import dotenv from "dotenv";
dotenv.config();
const mongodb_uri = process.env.MONGODB_URI;

mongoose.connect(mongodb_uri);

const db = mongoose.connection;

//mengangani error
db.on("error", console.error.bind(console, "connection error".bgRed.white));

//menangangi berhasil
db.once("open", function () {
  console.log("connected to mongodb database".bgCyan.white);
});

import "../models/categoryModel.js";
import "../models/recipeModel.js";
