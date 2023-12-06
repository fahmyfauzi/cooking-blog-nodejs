// Import modul express untuk membuat router
import express from "express";

// Import homepageHandler dari file controller recipeControoler.js
import {
  homepageHandler,
  getAllCategoriesHandler,
} from "../controllers/recipeControoler.js";

// Inisialisasi router menggunakan express.Router()
const router = express.Router();

// Menangani HTTP GET request pada endpoint "/" dengan menggunakan homepageHandler
router.get("/", homepageHandler);
router.get("/categories", getAllCategoriesHandler);

// Mengekspor router agar dapat digunakan di file lain
export default router;
