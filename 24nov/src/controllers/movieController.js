const getAllMovies = (req, res)=>{
    //devolvemos las pelis
    res.status(200).send("Aqui tienes todas las peliculas");
}

module.exports = { getAllMovies};