const express = require("express");
const { getAllMovies } = require("../controllers/movieController");

const router = express.Router();

// aqui las llamadas a las rutas que creamos usando su controlador 

router.get("/", getAllMovies)



// esta linea siempre 
module.exports = router;
