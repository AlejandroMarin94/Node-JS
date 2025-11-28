const express = require("express");
const { signup, login, getTokens } = require("../controllers/authController");
const { verifyToken } = require("../middlewares/auth");
const router = express.Router();

router.post("/signup", signup)
router.post("/login", login)



// Endpoint para el refresh_token

router.get("/refresh_token",verifyToken, getTokens)



module.exports = router

