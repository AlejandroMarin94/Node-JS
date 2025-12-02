const express = require("express");
const {
  getAllRecipes,
  //addRecipes,
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
  getRecipesFilteredByCategoryPassed,
} = require("../controllers/recipeController");
const { verifyToken, verifyAdmin } = require("../auth/auth-token");
const router = express.Router();

// Without authorization
//router.post("/", addRecipes); // Add recipes to BBDD
router.get("/", getAllRecipes); // GEt all recipes from BBDD
router.get("/recent", getRecentRecipes); // Get the 5 most recents recipes
router.get("/popular", getPopularRecipes); // Get the 5 most likes recipes


//With authorization
router.post("/", verifyToken, verifyAdmin, addRecipe);
router.patch("/:idRecipe", verifyToken, verifyAdmin, updateRecipeById);
router.delete("/:idRecipe", verifyToken, verifyAdmin, deleteRecipeById);
router.post("/:idRecipe/comment", verifyToken, setCommentToRecipe);

//Extras
router.post("/:idRecipe/like", verifyToken, setLikeToRecipe);
router.delete("/:idRecipe/like", verifyToken, removeLikeFromRecipe);
router.get("/category", verifyToken, getRecipesFilteredByCategory);
router.get("/categoryfilter", verifyToken, getRecipesFilteredByCategoryPassed);

// Without authorization
router.get("/:idRecipe", getRecipeById); // Get a recipe by its Id



//With authorization

module.exports = router;
