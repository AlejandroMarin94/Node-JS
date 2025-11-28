require("dotenv").config();
// Inicializamos express y cors(*)
const express = require("express");

// Para poder manejar las solicitudes CORS, usamos la libreria
const cors = require("cors");
const connectToDataBase = require("./src/db/connectDB");

const userRouter = require("./src/routers/userRouter");
const moviesRouter = require("./src/routers/userRouter");

const PORT = Number(process.env.PORT || 3000);

// Creamos aplicacion con express (server como servidor que creamos)(*)
const server = express();

// Middleware para que analize JSON de las solicitudes(*)
server.use(express.json());

connectToDataBase();

// Configuramos parametrización de CORS(*)
server.use(
  cors({
    origin: "http://localhost:5173", // Url o IP permitida
    methods: ["GET", "POST", "OPTIONS", "DELETE", "PUT"], // Métodos fetch permitidos
    allowedHeaders: ["Content-Type"], // Cabeceras permitidas
  })
);

// RUTAS
// Aqui irían las rutas
server.get("/", (req, res) => {
  res.send("Hola, mundo!");
});

server.use("/api/users", userRouter);

server.use("/api/movies", moviesRouter);

// Aqui es donde lanzo el server escuchando en ese puerto(*)
// Esto va lo último. Es donde inicializa en standBy el servidor llamado app
server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
