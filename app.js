// Import modul express dan beberapa modul terkait lainnya
import express, { urlencoded } from "express";
import dotenv from "dotenv";
import expressLayouts from "express-ejs-layouts";
import morgan from "morgan";
import "colors";

// Import file route untuk resep
import recipeRoutes from "./server/routes/recipeRoute.js";

// Inisialisasi aplikasi Express
const app = express();

// Konfigurasi dotenv untuk mengelola variabel lingkungan
dotenv.config();

// Middleware morgan untuk logging HTTP requests ke konsol
app.use(morgan("dev"));

// Middleware untuk meng-handle data yang dikirimkan melalui formulir
app.use(express.urlencoded({ extended: true }));

// Middleware untuk menyediakan file statis seperti gambar, stylesheet, dll.
app.use(express.static("public"));

// Middleware expressLayouts untuk layout EJS
app.use(expressLayouts);

// Konfigurasi EJS sebagai template engine
app.set("layout", "./layouts/main.ejs");
app.set("view engine", "ejs");

// Menggunakan route yang didefinisikan di file recipeRoute.js
app.use("/", recipeRoutes);

// Menentukan port server, menggunakan port dari variabel lingkungan jika ada, jika tidak, gunakan port 3000
const port = process.env.PORT || 3000;

// Mendengarkan pada port yang telah ditentukan
app.listen(port, () => {
  // Menampilkan pesan ketika server berhasil berjalan
  console.log(`Server running on http://localhost:${port}`.bgGreen.white);
});
