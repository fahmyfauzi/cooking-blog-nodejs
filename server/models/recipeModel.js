import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "This field is required",
  },
  description: {
    type: String,
    required: "This field is required",
  },
  email: {
    type: String,
    required: "This field is required",
  },
  ingredients: {
    type: Array,
    required: "This field is required",
  },
  category: {
    type: String,
    enum: ["Thai", "American", "Chinese", "Mexican", "Indian"],
    required: "This fields is required",
  },
  image: {
    type: String,
    required: "This field is required",
  },
});

// Membuat indeks teks pada kolom 'name' dan 'description' dalam skema Recipe
recipeSchema.index({ name: "text", description: "text" });
//Wildcard indexing
// recipeSchema.index({$**:'text'})

export default mongoose.model("Recipe", recipeSchema);
