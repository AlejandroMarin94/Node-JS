// Inicializamos express y cors(*)

const express = require("express");


const cors = require("cors")



//Creamos aplicaicon con express ( app como servidor que creamos)(*)
const app = express();

//Middleware para que analize JSON de las solicitudes (*)

app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:5173",
        method: ["GET", "POST", "OPTIONS"],
        allowedHeadrs:["Content-type"],
    }))
// RUTAS
//EndPoint principal o raiz, puerto a usar en mi server, aqui es donde se lanza el servidor a escuchar en ese puerto
app.get("/", (req, res) => {
  res.send("Hola mundo");
});

app.get("/about", (req, res) => {
  res.send("Acerca de mí: Nombre del alumno");
});

app.get("/info", (req, res) => {
  const dataUser = {
    nombre: "Alejandro",
    edad: 45,
    curso: "NodeJS",
  };
  res.send(
    JSON.stringify({
      status: "Succes",
      data: dataUser,
    })
  );
});

app.get("/hora", (req, res) => {
  const ahora = new Date().toISOString();
  res.send(`Hora actual: ${ahora}`);
});

app.get("/contact", (req, res) => {
  res.send("Puedes contactar en: alumno@example.com");
});





app.get("/hola", (req, res)=>{
  console.log("Hola mundo");
  
  res.send("Hola mundo")
})

app.get("/adios", (req,res)=>{
  console.log("adios");
  res.send("Adios")
  
})



const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
