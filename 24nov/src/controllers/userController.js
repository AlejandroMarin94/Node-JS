const userModel = require("../models/userModel");

const getAllUsers = async (req, res) => {
  try {
    console.log("eeee");

    const users = await userModel.find();
    if (users.length === 0) return res.status(200).send("No hay usuarios");

    res.status(200).send({ status: "succes", data: users });
  } catch (error) {
    res.status(500).send({ status: "faildes", error: error.message });
  }
};

/*
const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    if (users.length === 0) return res.status(200).send("No hay usuarios");
    res.status(200).send({ status: "Success",  data: users })
  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }
};
*/

const getUserById = async (req, res) => {
  try {
    const { idUser } = req.params;
    const user = await userModel.findById(idUser);
    if (!user) return res.status(200).send("No hay usuarios con ese id");

    res.status(200).send({ status: "Succes", data: user });
  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }
};

const insertNewUser = (req, res) => {
  const newUser = req.body;
  res.status(200).send(JSON.stringify(newUser));
};

const deleteUserById = async (req,res)=>{
  try {
  const {idUser} = req.params;
  console.log(idUser);
    res.status(200).send({status: "Succes", message: "Usuario eliminado correctamente"})
    const user = await userModel.findByIdAndDelete(idUser);
    if (!user) return res.status(200).send("No hay usuarios con ese id");

  

    
  } catch (error) {
    res.status(500).send({status: "failed", error: error.message})
    
  }


}

module.exports = { getAllUsers, getUserById, insertNewUser, deleteUserById };
