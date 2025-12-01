const recipeModel = require("../models/recipeModel");

const addRecipes = async (req, res) => {
  try {
    const recipes = req.body;
    await recipeModel.insertMany(recipes);
    res.status(200).send("Las recetas se han guardado correctamente");
  } catch (error) {
    res.status(500).send({ status: "Failed", message: error.message });
  }
};

const getAllRecipes = async (req, res) => {
  try {
    const recipes = await recipeModel.aggregate([
      {
        $project: {
          _id: 0,
          title: 1,
          description: 1,
          ingredients: 1,
          category: 1,
          imageUrl: 1,
          difficulty: 1,
          likes: { $size: "$likes" },
          creationDate: 1,
        },
      },
    ]);
    if (!recipes) {
      return res.status(200).send("No se encuentra ninguna receta");
    }
    res.status(200).send({ status: "Success", data: recipes });
  } catch (error) {
    res.status(500).send({ status: "Failed", message: error.message });
  }
};

const getRecipeById = async (req, res) => {
  try {
    const { idRecipe } = req.params;
    const recipe = await recipeModel.findById(idRecipe);
    if (!recipe) {
      return res.status(200).send("No se encuentra ninguna receta por ese Id");
    }
    res.status(200).send({ status: "Success", data: recipe });
  } catch (error) {
    res.status(500).send({ status: "Failed", message: error.message });
  }
};

const getRecentRecipes = async (req, res) => {
  try {
    const recentRecipes = await recipeModel.aggregate([
      {
        $sort: { creationDate: -1 },
      },
      {
        $limit: 5,
      },
    ]);
    if (!recentRecipes) {
      return res.status(200).send("No se encuentran recetas");
    }
    res.status(200).send({ status: "Success", data: recentRecipes });
  } catch (error) {
    res.status(500).send({ status: "Failed", message: error.message });
  }
};

const getPopularRecipes = async (req, res) => {
  try {
    const popularRecipes = await recipeModel.aggregate([
      {
        $addFields: {
          likesCount: { $size: "$likes" },
        },
      },
      {
        $sort: { likesCount: -1 },
      },
      {
        $limit: 5,
      },
    ]);
    if (!popularRecipes) {
      return res.status(200).send("No se encuentran recetas");
    }
    res.status(200).send({ status: "Success", data: popularRecipes });
  } catch (error) {
    res.status(500).send({ status: "Failed", message: error.message });
  }
};

const addRecipe = async (req, res) => {
  try {
    const newRecipe = req.body;
    await recipeModel.create(newRecipe);
    res.status(200).send("La receta se ha guardado correctamente");
  } catch (error) {
    res.status(500).send({ status: "Failed", message: error.message });
  }
};

const updateRecipeById = async (req, res) => {
  try {
    const { idRecipe } = req.params;
    const newRecipe = req.body;
    const updateRecipe = await recipeModel.findByIdAndUpdate(
      idRecipe,
      newRecipe,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updateRecipe) {
      return res.status(200).send("No existe ninguna receta con ese Id");
    }
    res
      .status(200)
      .send({ status: "Success", message: "La receta se ha modificado" });
  } catch (error) {
    res.status(500).send({ status: "Failed", message: error.message });
  }
};

const deleteRecipeById = async (req, res) => {
  try {
    const { idRecipe } = req.params;
    const deleteRecipe = await recipeModel.findByIdAndDelete(idRecipe);
    if (!deleteRecipe) {
      return res.status(200).send("No existe ninguna receta con ese Id");
    }
    res
      .status(200)
      .send({ status: "Success", message: "La receta se ha eliminado" });
  } catch (error) {
    res.status(500).send({ status: "Failed", message: error.message });
  }
};

const setCommentToRecipe = async (req, res) => {
  try {
    const { idRecipe } = req.params;
    const recipe = await recipeModel.findById(idRecipe);
    if (!recipe) {
      return res.status(200).send("No hay ninguna receta por ese Id");
    }
    const idUser = req.payload._id;
    const body = req.body;

    const comment = {
      comment: body.comment,
      userId: idUser,
      date: new Date(),
      rating: body.rating,
    };

    recipe.comments.push(comment);
    recipe.save();
    res.status(200).send({ status: "Success", data: recipe });
  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }
};

const setLikeToRecipe = async (req, res) => {
  try {
    const { idRecipe } = req.params;
    const recipe = await recipeModel.findById(idRecipe);
    if (!recipe) {
      return res.status(200).send("No hay ninguna receta por ese Id");
    }
    const idUser = req.payload._id;
    if (recipe.likes.includes(idUser)) {
      return res.status(200).send("El usuario ya había dado like");
    }

    recipe.likes.push(idUser);
    recipe.save();
    res.status(200).send({ status: "Success", data: recipe });
  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }
};

const removeLikeFromRecipe = async (req, res) => {
  try {
    const { idRecipe } = req.params;
    const recipe = await recipeModel.findById(idRecipe);
    if (!recipe) {
      return res.status(200).send("No hay ninguna receta por ese Id");
    }
    const idUser = req.payload._id;
    if (!recipe.likes.includes(idUser)) {
      return res.status(200).send("El usuario no había dado like todavía");
    }

    recipe.likes.pull(idUser);
    recipe.save();
    res.status(200).send({ status: "Success", data: recipe });
  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }
};

const getRecipesFilteredByCategory = async (req, res) => {
  try {
    const recipes = await recipeModel.aggregate([
      {
        $project: {
          _id: 1,
          title: 1,
          description: 1,
          ingredients: 1,
          category: 1,
          imageUrl: 1,
          difficulty: 1,
          likes: 1,
          creationDate: 1,
          comments: 1,
        },
      },
      {
        $group: {
          _id: "$category",
          recipes: {
            $push: {
              _id: "$_id",
              title: "$title",
              description: "$description",
              ingredients: "$ingredients",
              category: "$category",
              imageUrl: "$imageUrl",
              difficulty: "$difficulty",
              likes: "$likes",
              creationDate: "$creationDate",
              comments: "$comments",
            },
          },
        },
      },
    ]);
    if (!recipes.length) {
      return res.status(200).send("No se han encontrado recetas");
    }
    res.status(200).send({ status: "Success", data: recipes });
  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }
};

const getRecipesFilteredByCategoryPassed = async (req, res) => {
  try {
    const { filter } = req.query;
    const recipes = await recipeModel.find({
      category: filter
    })
    if (!recipes.length) {
      return res.status(200).send("No se han encontrado recetas");
    }
    res.status(200).send({ status: "Success", data: recipes });
  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }
}

module.exports = {
  getAllRecipes,
  addRecipes,
  getRecipeById,
  getRecentRecipes,
  getPopularRecipes,
  addRecipe,
  updateRecipeById,
  deleteRecipeById,
  setCommentToRecipe,
  setLikeToRecipe,
  removeLikeFromRecipe,
  getRecipesFilteredByCategory,
  getRecipesFilteredByCategoryPassed
};
