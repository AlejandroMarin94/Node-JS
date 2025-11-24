
// Inicializamos express y cors(*)
const express = require("express");

// Para poder manejar las solicitudes CORS, usamos la libreria
const cors = require("cors");

//  Ejemplo importacion archivo que simula BBDD Mockeada (Si se necesita)


// Creamos aplicacion con express (server como servidor que creamos)(*)
const server = express();

// Middleware para que analize JSON de las solicitudes(*)
server.use(express.json());

// Configuramos parametrización de CORS(*)
server.use(
    cors({
        origin:"http://localhost:5173", // Url o IP permitida
        methods: ["GET", "POST", "OPTIONS"], // Métodos fetch permitidos
        allowedHeaders: ["Content-Type"], // Cabeceras permitidas
    }));

// RUTAS
// Aqui irían las rutas 
server.get("/",(req, res) => {res.send("Hola, mundo!")})

// Puerto a usar en mi server(*)
const PORT = 3000;

// Aqui es donde lanzo el server escuchando en ese puerto(*)
// Esto va lo último. Es donde inicializa en standBy el servidor llamado app
server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
