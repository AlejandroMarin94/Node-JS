// EJERCICIO 1:
//   Crea un servidor HTTP que tenga estas rutas:
//
//   - GET /
//     Respuesta: "Bienvenido a mi primer servidor"
//
//   - GET /about
//     Respuesta: "Acerca de mí: (nombre del alumno)"
//
//   - GET /contact
//     Respuesta: "Puedes contactar en: (email ficticio)"

// EJERCICIO 2:
//   Modifica el servidor para que devuelva JSON en la ruta /info:
//
//   - GET /info
//     Respuesta (JSON):
//       {
//         curso: "Node.js",
//         alumno: "Nombre del alumno",
//         año: 2025
//       }

// EJERCICIO 3:
//   Crea una ruta /hora que devuelva la hora actual del sistema.
//  const ahora = new Date().toISOString();ç

// EJERCICIO 4
// Crear un proyecto de Vite básico, donde solo se vea un boton en la web,
// Dicho boton, al hacer click llamara a la ruta http://localhost:3000/info y mostrará por consola el resultado de esda petición
// Nota: Usar async-await
// EXTRA: Por CORS, necesitareis poner:
// res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
// res.setHeader("Access-Control-Allow-Methods", "GET");
// res.setHeader("Access-Control-Allow-Headers", "Content-Type");

const usuarios = [
  { nombreUsuario: "alejandro", contraseña: "1234" },
  { nombreUsuario: "maria", contraseña: "abcd" },
  { nombreUsuario: "juan", contraseña: "pass2025" },
];

const http = require("http");
const usuariosDatos =usuarios
const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("Bienvenido a mi primer servidor");

    

    } else if (req.method === "POST" && req.url === "/login") {
    res.writeHead(200, { "Content-type": "text/plain" });
    usuariosDatos.forEach((usuario)=>{
      if(usuario.nombreUsuario===nombreUsuario && usuario.contraseña===contraseña){

      }
    })
    res.end("Acerca de mi: (nombre del alumno)");




  } else if (req.method === "GET" && req.url === "/about") {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("Acerca de mi: (nombre del alumno)");
  } else if (req.method === "GET" && req.url === "/hora") {
    res.writeHead(200, { "Content-type": "text/plain" });

    const ahora = new Date().toISOString();

    res.end(JSON.stringify(ahora));
  } else if (req.method === "GET" && req.url === "/info") {
    res.writeHead(200, { "Content-type": "text/plain" });

    const respuesta = {
      curso: "Node.js",
      alumno: "Alejandro",
      año: 2025,
    };

    res.end(JSON.stringify({ status: res.statusCode, data: respuesta }));
  } else {
    res.writeHead(404, { "Content-type": "text/plain" });
    res.end("No se ha encontrado la ruta");
  }
});

server.listen(3000, () => {
  console.log("servidor escuchando en http://localhost:3000");
});
