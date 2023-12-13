// Import modul express dan beberapa modul terkait lainnya
import express from "express";
import dotenv from "dotenv";
import expressLayouts from "express-ejs-layouts";
import morgan from "morgan";
import "colors";
import fileUpload from "express-fileupload";
import session from "express-session";
import cookieParser from "cookie-parser";
import flash from "connect-flash";

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

// Menggunakan cookieParser middleware dengan kunci "CookingBlogSecure" untuk mengelola cookie
app.use(cookieParser("CookingBlogSecure"));

// Menggunakan middleware cookieParser dengan kunci "CookingBlogSecure"
app.use(cookieParser("CookingBlogSecure"));

// Menggunakan middleware session untuk mengelola sesi
app.use(
  session({
    secret: "cookingblogsecretsession", // Kunci rahasia untuk mengamankan sesi
    saveUninitialized: true, // Menyimpan sesi meskipun tidak ada data yang disimpan dalam sesi
    resave: true, // Selalu menyimpan sesi, bahkan jika tidak ada perubahan
  })
);

// Menggunakan middleware flash untuk mengelola pesan flash
app.use(flash());

// Menggunakan middleware fileUpload untuk menangani pengunggahan file
app.use(fileUpload());

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
