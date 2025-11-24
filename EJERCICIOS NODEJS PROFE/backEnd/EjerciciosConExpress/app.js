// Inicializamos express y cors(*)
const express = require("express");
// Para poder manejar las solicitudes CORS, usamos la libreria
// npm i cors
const cors = require("cors");

const { usuarios } = require("./bbddMockeada/dataUsers");

//Creamos aplicacion con express ( app como servidor que creamos)(*)
const app = express();

// Middleware para que analize JSON de las solicitudes(*)
app.use(express.json());

// Configuramos parametrización de CORS
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

// RUTAS
// EndPoint principal o raiz
app.get("/", (req, res) => {
  // Inserto en mi BBDD que me ha llegado esta peticion y de donde
  res.send("Hola, mundo");
});

// Ejemplos de una llamada a obtener listado de usuarios
app.get("/userslist", (req, res) => {
  // Llamada a la BBDD con el metodo que sea
  // La bbdd me devuelve unos datos, que los igualeare a una const usuarios
  res.send(JSON.stringify(usuarios)); // Usando nuestro usuarios mockeados
});

// EndPoint de about
app.get("/about", (req, res) => {
  res.send("Acerca de mí: Nombre del alumno");
});

// EndPoint de contact
app.get("/contact", (req, res) => {
  res.send("Puedes contactar en: alumno@example.com");
});

// EndPoint de info
app.get("/info", (req, res) => {
  const dataUser = {
    nombre: "Alejandro",
    edad: 45,
    curso: "NodeJS",
  };
  res.send(
    JSON.stringify({
      status: "Success",
      data: dataUser,
    })
  );
});

// EndPoint de hora
app.get("/hora", (req, res) => {
  const ahora = new Date().toISOString();
  res.send(`Hora actual: ${ahora}`);
});

// EndPoint de login
app.post("/login",(req, res) => {
  // Obtengo email y pass desde mi front
  const { email, pass } = req.body;

  // Busco dentro de mi array de usuarios si ecnuentro el que me ha llegado
  const usuario = usuarios.find((u) => u.email === email && u.pass === pass);

  // No se encuentra el usuario
  if (!usuario) {
    /*
    return res.status(200).json({
      status: "Failed",
      message: "Email o contraseña incorrectos",
    });
    */
    return res.send(
      JSON.stringify({
        status: "Failed",
        message: "Email o contraseña incorrectos",
      })
    );
  }

  // Verificar rol del usuario
  if (usuario.role !== "admin") {
    /*
    return res.status(200).json({
      status: "Failed",
      message: "El usuario no tiene provilegios",
    });
    */
    return res.send(
      JSON.stringify({
        status: "Failed",
        message: "El usuario no tiene provilegios",
      })
    );
  }

  /* 1 forma
  res.status(200).json({
    status: "Success",
    userData: usuario,
  }); */

  // 2 forma(Mejor esta)
  res.send(
    JSON.stringify({
      status: "Success",
      userData: usuario,
    })
  );
});

//Endpoint Ejercicio 9
app.get("/productos", (req, res) => {
  const { categoria, precio_max } = req.query;
  res.send(
    `Buscando productos de la categoría ${categoria} con precio máximo ${precio_max}`
  );
});

// EndPoint Ejercicio 10
const movies = [
  { id: 1, title: "Peli 1", category: "terror" },
  { id: 2, title: "Peli 2", category: "accion" },
];

app.get("/movies", (req, res) => {
  res.status(200).send(movies);
});

app.get("/movies/:id", (req, res) => {
  const { id } = req.params;
  const movie = movies.find((m) => m.id === Number(id));
  if (!movie) {
    return res.status(404).send("Pelicula no encontrada");
  }
  res.status(200).send(movie);
});

// Endpoint Ejercicio 11
app.post("/movies", (req, res) => {
  const newMovie = req.body;
  // Asumimos que viene con un id único
  movies.push(newMovie);
  res.status(201).send(movies);
});

// Endpoint Ejercicio 12
app.post("/orders/:userId/products/:productId", (req, res) => {
  // Desectructuring de Route Params
  const { userId, productId } = req.params;
  // Desectructuring de Query Params
  const { status, priority } = req.query;
  // Desectructurin de Body Params
  const { quantity, address } = req.body;
  // Desectructuring de Header Params
  const { client_id, auth_token } = req.headers;

  if (!quantity || !address) {
    return res
      .status(400)
      .send("Faltan campos que son oblicatorios en el body");
  }

  if (!auth_token || !client_id) {
    return res
      .status(400)
      .send("Faltan campos que son oblicatorios en headers");
  }

  console.log("Parametros recibidos:");
  console.log("Route Params:");
  console.log(`userId: ${userId}\nproductId:${productId}`);
  console.log("Query Params:");
  console.log(`status: ${status}\npriority:${priority}`);
  console.log("Body Params:");
  console.log(`quantity: ${quantity}\naddress:${address}`);
  console.log("Headers Params:");
  console.log(`authToken: ${auth_token}\nclientId:${client_id}`);

  const response = {
    message: "Pedido recibido correctamente",
    routeParams: { userId, productId },
    queryParams: { status, priority },
    bodyParams: { quantity, address },
    headerParams: { client_id, auth_token },
  };

  res.send(JSON.stringify(response));
});

// FINAL RUTAS

// Puerto a usar en mi server(*)
const PORT = 3000;

// Aqui es donde lanzo el server escuchando en ese puerto(*)
// Esto va lo último. Es donde inicializa en standBy el servidor llamado app
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
