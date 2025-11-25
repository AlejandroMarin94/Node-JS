// Importamos mongoose
const mongoose = require("mongoose");
// Instanciamos la calse Schema de mongoose
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: {
    type: String,
    required: [true, "El titulo el obligatorio"],
  },
  description: {
    type: String,
    required: [true, "La descripcion es obligatorio"],
  },
  category: {
    type: String,
    required: [true, "La categoria es obligatoria"],
  },
  director: {
    type: String,
    required: [true, "El director es obligatorio"],
  },
  rating: {
    type: String,
    required: [true, "La valoracione es requerida"],
  },
  posterURL: {
    type: String,
    required: [true, "El poster es obligatorio"],
  },

  trailerURL: {
    type: String,
    required: [true, "El trailer es obligatorio"],
  },

  year: {
    type: String,
    required: [true, "El año es obligatorio"],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const movieModel = mongoose.model("Movie", movieSchema, "movies");

module.exports = movieModel;
