// Import modul express untuk membuat router
import express from "express";

// Import homepageHandler dari file controller recipeControoler.js
import {
  homepageHandler,
  getAllCategoriesHandler,
  getRecipeByIdHandler,
  getCategoryByIdHandler,
  searchRecipeHandler,
  getRecipeLatestHandler,
  getRecipeRandomHandler,
} from "../controllers/recipeControoler.js";

// Inisialisasi router menggunakan express.Router()
const router = express.Router();

// Menangani HTTP GET request pada endpoint "/" dengan menggunakan homepageHandler
router.get("/", homepageHandler);
router.get("/categories", getAllCategoriesHandler);
router.get("/recipe/:id", getRecipeByIdHandler);
router.get("/categories/:id", getCategoryByIdHandler);
router.post("/search", searchRecipeHandler);
router.get("/explore-latest", getRecipeLatestHandler);
router.get("/random-recipe", getRecipeRandomHandler);
// Mengekspor router agar dapat digunakan di file lain
export default router;
