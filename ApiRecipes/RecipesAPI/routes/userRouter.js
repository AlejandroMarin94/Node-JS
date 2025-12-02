const express = require("express");
const {
  signup,
  login,
  getFavouriteRecipes,
  addRecipeToFavorites,
  removeRecipeFromFavorites,
  updateUserLoggedData,
  getTokens,
} = require("../controllers/userController");
const { verifyToken } = require("../auth/auth-token");
const router = express.Router();

router.post("/", signup);
router.get("/", login);

//Need auth
router.get("/favorites", verifyToken, getFavouriteRecipes);
router.post("/:recipeId/favorite", verifyToken, addRecipeToFavorites)
router.delete("/:recipeId/favorite", verifyToken, removeRecipeFromFavorites)
router.patch("/", verifyToken, updateUserLoggedData)

//Auth gen
router.get("/generateToken", verifyToken, getTokens)

module.exports = router;
