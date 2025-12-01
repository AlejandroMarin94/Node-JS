const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  comment: {
    type: String,
    required: [true, "El comentario acerca de la receta es obligatorio"],
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
  },
  rating: {
    type: Number,
    required: [true, "El ratign de la receta es obligatorio"],
  }
});

const schemaRecipe = new Schema({
  title: {
    type: String,
    required: [true, "El nombre de la receta es obligatorio"],
  },
  description: {
    type: String,
    required: [true, "La descripción de la receta es obligatoria"],
  },
  ingredients: {
    type: [],
    required: [true, "Los ingredientes de la receta son obligatorios"],
  },
  category: {
    type: String,
    enum: [
      "entrante",
      "ensaladas",
      "principal",
      "segundos",
      "postre",
      "bebidas",
    ],
    required: [true, "La categoría de la receta es obligatoria"],
  },
  imageUrl: {
    type: String,
    required: [true, "La imagen de la receta es obligatoria"],
  },
  difficulty: {
    type: String,
    enum: ["facil", "medio", "dificil"],
    default: "facil",
  },
  likes: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "user",
  },
  creationDate: {
    type: Date,
    default: Date.now,
  },
  comments: [ commentSchema ],
});

const recipeModel = mongoose.model("recipe", schemaRecipe, "recipes");
module.exports = recipeModel;
