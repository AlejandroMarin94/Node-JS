const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const { generateToken } = require("../auth/auth-token");
const recipeModel = require("../models/recipeModel");
const { sendEmail } = require("../services/emailService");
const { signup_html } = require("../services/templates/signup")

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = {
      name,
      email,
      password: await bcrypt.hash(password, 10),
    };
    const user = await userModel.create(newUser);

    // Send registration email
    // Send notification mail
    const to = email;
    const subject = "Bienvenido a MundoRecetas";
    let html = signup_html.replace("[NOMBRE_DEL_USUARIO]", name);

    await sendEmail(to, subject, html);

    if (!user) {
      return res
        .status(400)
        .send({ status: "Failed", message: "No se ha creado el usuario" });
    }
    res.status(200).send("El usuario se ha creado");
  } catch (error) {
    res.status(500).send({ status: "Failed", message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email: email });
    if (!user) {
      return res.status(404).send("Usuario o contraseña no validos");
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(404).send("Usuario o contraseña no validos");
    }
    // Creamos Token
    const payload = {
      _id: user.id,
      name: user.name,
      role: user.role,
    };

    const token = generateToken(payload, false);
    const token_refresh = generateToken(payload, true);

    res
      .status(200)
      .send({ status: "Success", data: user, token, token_refresh });
  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }
};

const getFavouriteRecipes = async (req, res) => {
  try {
    const idUser = req.payload._id;
    const userRecipes = await userModel
      .findById(idUser)
      .populate({ path: "favoriteRecipes" });
    if (!userRecipes) {
      return res.status(200).send("No se ha encontrado ese usuario");
    }
    res.status(200).send({ status: "Success", data: userRecipes });
  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }
};

const addRecipeToFavorites = async (req, res) => {
  try {
    const { recipeId } = req.params;
    const userId = req.payload._id;
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(200).send("No se ha encontrado ese usuario");
    }
    const recipe = await recipeModel.findById(recipeId);
    if (!recipe) {
      return res.status(200).send("No se ha encontrado esa receta");
    }
    if (user.favoriteRecipes.includes(recipeId)) {
      return res.status(200).send("La receta ya está en favoritos");
    }
    user.favoriteRecipes.push(recipeId);
    user.save();

    res.status(200).send({ status: "Success", data: user });
  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }
};

const removeRecipeFromFavorites = async (req, res) => {
  try {
    const { recipeId } = req.params;
    const userId = req.payload._id;
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(200).send("No se ha encontrado ese usuario");
    }
    const recipe = await recipeModel.findById(recipeId);
    if (!recipe) {
      return res.status(200).send("No se ha encontrado esa receta");
    }
    if (!user.favoriteRecipes.includes(recipeId)) {
      return res.status(200).send("La receta no está en favoritos");
    }
    user.favoriteRecipes.pull(recipeId);
    user.save();

    res.status(200).send({ status: "Success", data: user });
  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }
};

const updateUserLoggedData = async (req, res) => {
  try {
    const idUser = req.payload._id;
    const dataUserUpdate = req.body;
    const updateUser = await userModel.findByIdAndUpdate(
      idUser,
      dataUserUpdate,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updateUser) {
      res
        .status(200)
        .send({
          status: "Failed",
          message: "No se ha encontrado ningún usuario por ese Id",
        });
    }
    res
      .status(200)
      .send({ status: "Success", message: "El usuario ha sido modificado" });
  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }
};

const getTokens = (req, res) => {
  try {
    const payload = {
      _id: req.payload._id,
      name: req.payload.name,
      role: req.payload.role,
    }

    // Regenerate New Tokens
    const token = generateToken(payload, false);
    const token_refresh = generateToken(payload, true);

    res.status(200).send({ status: "Success", token, token_refresh});
  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }

}

module.exports = {
  signup,
  login,
  getFavouriteRecipes,
  addRecipeToFavorites,
  removeRecipeFromFavorites,
  updateUserLoggedData,
  getTokens
};
