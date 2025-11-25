const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");

const BCRYPT_ROUNDS = Number(process.env.BCRYPT_ROUNDS || 10);

const signup = async (req, res) => {
  try {
    const { name, lastName, email, password } = req.body;
    const newUser = {
      name,
      lastName,
      email,
      password: await bcrypt.hash(password, BCRYPT_ROUNDS),
    };
    const user = await userModel.create(newUser);
    if (!user)
      return res.status(400).send({ status: "Failed", error: error.message });
    res.status(200).send({
      status: "Succes",
      message: "El usuario se ha creado correctamente",
    });
  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel
      .findOne({ email: email })
      .select("name lastName email password role");
      if(!user){
        return res.status(400)
        .send({status: "Failed", message: "Credenciales introducidas incorrectas"})
      }

      const validatePassword = await bcrypt.compare(password, user.password);
      if(!validatePassword) {
        return res.status(404)
        .send({status: "Failed", message: "Credenciales introducidas incorrectas"})

      }

      const returnUser = {
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        role: user.role
      }
      res.status(200).send({status: "Succes", data: user })
  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }
};

module.exports = { signup, login };
