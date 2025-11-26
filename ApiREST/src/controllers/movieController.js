const movieModel = require("../models/movieModels");

const getAllMovies = async (req, res) => {
  try {
    const movies = await movieModel.find();
    if (movies.length === 0)
      return res.status(200).send("No se han encontrado peliculas");
    res.status(200).send({ status: "Succes", data: movies });
  } catch (error) {
    res.status(500).send({ status: "Failed", message: error.message });
  }
  res
    .status(200)
    .send({ status: "Success", message: "Peliculas obtenidas correctamente." });
};

const getMovieById = async (req, res) => {
  try {
    const { idMovie } = req.params;
    console.log(idMovie);
    const movie = await movieModel.findById(idMovie);
    if (!movie) return res.status(200).send("No existe pelicula con ese id");
    res.status(200).send({ status: "Success", data: movie });
  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }
};

const getMovieByName = async (req, res) => {
  try {
    const { movieTitle } = req.params;
    const movies = await movieModel.find({
      title: { $regex: movieTitle, options: "i" },
    });

    if (movies.length === 0)
      return res.status(200).send("No se han encontrado peliculas");
  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }
};

const setComentToMovie = async (req, res) => {
  try {
    const { idMovie } = req.params;
    const movie = await movieModel.findById(idMovie);
    if (!movie) return res.status(200).send("No existe pelicula con ese id");
    const { comment } = req.body;
    const idUser = req.payload._id;

    const commentObject = {
      userId: idUser,
      comment: comment,
    };

    movie.comments.push(commentObject);
    movie.save();
    res.status(200).send({ status: "Succes", data: movie });
  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }
};

const removeCommentToMovie = async (req, res) => {
  try {
    const { idMovie, idComment } = req.params;
    const movie = await movieModel.findById(idMovie);
    if (!movie) return res.status(200).send("No existe pelicula con ese id");
    const comment = movie.comments.id(idComment);
    if (!comment) {
      return res.status(200).send("No existe pelicula con ese id");
    }

    comment.deleteOne();

    movie.save();
    res.status(200).send({ status: "Succes", data: movie });
  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }
};

module.exports = {
  getAllMovies,
  getMovieById,
  getMovieByName,
  setComentToMovie,
  removeCommentToMovie,
};
