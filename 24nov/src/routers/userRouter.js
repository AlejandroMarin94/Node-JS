const express = require("express");
const { getAllUsers, getUserById, insertNewUser, deleteUserById } = require("../controllers/userController");

const router = express.Router();

/* router.get("/", (req,res)=>{
    res.send("lo que sea")
})
    */

router.get("/", getAllUsers);

router.get("/:idUser", getUserById);

router.post("/", insertNewUser);

router.delete("/:idUser", deleteUserById )

module.exports = router;
