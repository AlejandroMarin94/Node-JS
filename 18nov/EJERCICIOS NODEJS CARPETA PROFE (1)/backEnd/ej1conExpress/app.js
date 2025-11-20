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
        origin:"http://localhost:5173",
        methods: ["GET", "POST", "OPTIONS"],
        allowedHeaders: ["Content-Type"],
    }));

// RUTAS
// EndPoint principal o raiz
app.get("/", (req, res) => {
  res.send("Hola, mundo");
});

// Ejemplos de una llamada a obtener listado de usuarios
app.get("/userslist", (req, res) => {
    // Llamada a la BBDD con el metodo que sea
    // La bbdd me devuelve unos datos, que los igualeare a una const usuarios
    res.send(JSON.stringify(usuarios)) // Usando nuestro usuarios mockeados
})

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
app.post("/login", (req, res) => {
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
    return res.send(JSON.stringify({
      status: "Failed",
      message: "Email o contraseña incorrectos",
    }))
  }

  // Verificar rol del usuario
  if (usuario.role !== "admin") {
    /*
    return res.status(200).json({
      status: "Failed",
      message: "El usuario no tiene provilegios",
    });
    */
    return res.send(JSON.stringify({
      status: "Failed",
      message: "El usuario no tiene provilegios",
    }))
  }

  /* 1 forma
  res.status(200).json({
    status: "Success",
    userData: usuario,
  }); */

  // 2 forma(Mejor esta)
  res.send(JSON.stringify({
    status: "Success",
    userData: usuario,
  }))
});


// FINAL RUTAS

// Puerto a usar en mi server(*)
const PORT = 3000;

// Aqui es donde lanzo el server escuchando en ese puerto(*)
// Esto va lo último. Es donde inicializa en standBy el servidor llamado app
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
