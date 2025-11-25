// Estas dos lineas siempre
const express = require("express");
const { getAllMovies, getMovieById, getMovieByName} = require("../controllers/movieController");
const router = express.Router();

// Aqui las llamadas a las rutas que creemos usando su controlador.
router.get("/", getAllMovies)

router.get("/:idMovie", getMovieById);

router.get("/searchName/:movieTitle", getMovieByName)




// Esta linea siempre
module.exports = router