// Estas dos lineas siempre
const express = require("express");
const { getAllMovies, getMovieById } = require("../controllers/movieController");
const router = express.Router();

// Aqui las llamadas a las rutas que creemos usando su controlador.
router.get("/", getAllMovies)

router.get("/:idMovie", getMovieById);




// Esta linea siempre
module.exports = router