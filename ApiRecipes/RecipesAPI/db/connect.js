const mongoose = require("mongoose");
const URL_MONGO = process.env.URL_MONGO;

const connectDatabase = async () => {
  try {
    await mongoose.connect(URL_MONGO);
    console.log("Conexión a la base de datos realizada con éxito");
  } catch (error) {
    console.log("Error al conectar a la base de datos de Mongo", error);
  }
};

module.exports = connectDatabase;
