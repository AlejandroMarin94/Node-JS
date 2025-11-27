const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");
const generateToken = require("../utils/authToken");

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
/*
const signupMultiples = async (req, res) => {
  //recibo en el body todos los usuarios que es un array de objetos
try {
  let cantidadIntroducida = 0;
  const usersArray = rqe.body;
  const cantidadUsers = usersArray.length;
  if(cantidadUsers===0) 
    return res.status(200).send("No has enviado usuarios");
  


  
  
} catch (error) {
  
}


  if (usersArray.length === 0)
  

    
  });
};
*/

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel
      .findOne({ email: email })
      .select("name lastName email password role isActive"); // PARA NO MOSTAR MI _ID TENDRIA QUE AÑADIR DENTRL DEL SELECT -ID
    if (!user) {
      return res.status(400).send({
        status: "Failed",
        message: "Credenciales introducidas incorrectas",
      });
    }

    const validatePassword = await bcrypt.compare(password, user.password);
    if (!validatePassword) {
      return res.status(404).send({
        status: "Failed",
        message: "Credenciales introducidas incorrectas",
      });
    }

    if (!user.isActive) {
      return res.status(400).send({
        status: "Failed",
        message: "El usuario está deshabilitado temporalmente",
      });
    }

    const returnUser = {
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
    };

    //Zona para la creaciono del token

    const payload = {
      _id: user._id,
      name: user.name,
      role: user.role,
    };

    const token = generateToken(payload, false);
    const token_refresh = generateToken(payload, true);

    res
      .status(200)
      .send({ status: "Succes", data: returnUser, token, token_refresh });
  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }
};

const getTokens = (rqe, res) => {
  try {
    const payload = {
      _id: req.payload._id,
      name: req.payload.name,
      role: req.payload.role,
    };

    const token = generateToken(payload, false);
    const token_refresh = generateToken(payload, true);

    res.status(200).send({ status: "Success", token, token_refresh });
  } catch (error) {
    res.status(500).send({ status: "Failed", error: error.message });
  }
};

module.exports = { signup, login, getTokens};
