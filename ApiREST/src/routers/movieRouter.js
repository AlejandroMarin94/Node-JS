// Estas dos lineas siempre
const express = require("express");
const { getAllMovies, getMovieById, getMovieByName, setComentToMovie, removeCommentToMovie} = require("../controllers/movieController");
const { verifyToken } = require("../middlewares/auth");
const router = express.Router();

// Aqui las llamadas a las rutas que creemos usando su controlador.
router.get("/", getAllMovies)

router.get("/:idMovie", getMovieById);

router.get("/searchName/:movieTitle", getMovieByName)



// Aqui peticiones que interpreto que necesitan autentificacion

router.post("/comments/:idMovie", verifyToken, setComentToMovie)
router.delete("/:idMovie/comments/:idComment",verifyToken, removeCommentToMovie)



// Esta linea siempre
module.exports = router