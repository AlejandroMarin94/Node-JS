const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schemaUser = new Schema({
  name: {
    type: String,
    required: [true, "El nombre del usuario es obligatorio"],
  },
  email: {
    type: String,
    required: [true, "El email del usuario es obligatorio"],
    unique: [true, "El correo ya está registrado en el sistema"],
    trim: true,
  },
  password: {
    type: String,
    required: [true, "La contraseña del usuario es obligatoria"],
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  favoriteRecipes: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "recipe",
  },
});

/* schemaUser.pre(/^find/, function(next) {
    this.select("-password");
    next();
}); */

const userModel = mongoose.model("user", schemaUser, "users");
module.exports = userModel;
