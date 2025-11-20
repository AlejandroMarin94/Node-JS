const express = require("express");

const cors = require("cors");

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);


app.get("/", (req, res) => {
  res.send("Bienvenido a mi api con express");
});

app.get("/about", (req, res) => {
  res.send("Soy (nombre del alumno) y esta es mi API de prueba");
});


app.get("/productos", (req, res)=>{
    const { categoria, precio_max} = req.query;
    console.log("probando" + categoria + precio_max);
    res.send(`Buscando productos de la categoria ${categoria}, con un precio maximo de ${precio_max}`)

    

})


// EJERCICIO 9:
//   Crear una ruta GET /productos que reciba query params:
//     - categoria
//     - precio_max
//   y devuelva un texto:
//     "Buscando productos de la categoría X con precio máximo Y"



// EJERCICIO 10:
//   Crear un array en memoria de películas y exponer:
//
//   - GET /movies
//     Devuelve todas las películas.
//
//   - GET /movies/:id
//     Devuelve una película por id (id puede ser un número).



const peliculas = [
  { id: 1, titulo: "El Padrino", categoria: "Crimen" },
  { id: 2, titulo: "Pulp Fiction", categoria: "Crimen" },
  { id: 3, titulo: "El Señor de los Anillos: La Comunidad del Anillo", categoria: "Fantasía" },
  { id: 4, titulo: "Inception", categoria: "Ciencia Ficción" },
  { id: 5, titulo: "Forrest Gump", categoria: "Drama" },
  { id: 6, titulo: "Matrix", categoria: "Ciencia Ficción" },
  { id: 7, titulo: "Interestelar", categoria: "Ciencia Ficción" },
  { id: 8, titulo: "Gladiador", categoria: "Acción" },
  { id: 9, titulo: "Parásitos", categoria: "Suspenso" },
  { id: 10, titulo: "La La Land", categoria: "Musical" }
];

app.get("/movies/:id", (req, res)=>{

    const {id } = req.params;
    console.log(id);

  const pelicula = peliculas.find((p)=>
    p.id===Number(id)
  )
  if(!pelicula) return res.send("no se ha encontrado l apleicula");

  res.send(JSON.stringify(pelicula))
    

    
   
    
    
})

// EJERCICIO 11:
//   Crear una ruta POST /movies que reciba una película en req.body
//   y la añada al array.

app.post("/movies", (req, res)=>{
    const pelicula = req.body;
    console.log("Array pelis");
    console.log(peliculas);
    
    peliculas.push(pelicula)
    console.log("Array pelis modificado");
    console.log(peliculas);
    
    

    res.send("Pelicula introducida correctamente");
    
})


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});



// EJERCICIO 12 - COMPLETO - ENDPOINT /orders
 
/*
 
Crea un endpoint en tu servidor Express que reciba información
sobre un "pedido" (order) usando LOS 4 TIPOS DE PARÁMETROS:
 
1) Route Params (params):
   - userId: id del usuario que hace el pedido
   - productId: id del producto
 
   Ruta:  POST /orders/:userId/products/:productId
 
2) Query Params:
   - status: estado inicial del pedido (por defecto "pending")
   - priority: prioridad del pedido (por ejemplo "low", "normal", "high")
 
   Ejemplo de URL:
   POST http://localhost:3000/orders/123/products/999?status=pending&priority=high
 
3) Body Params (JSON):
   - quantity: número de unidades del producto
   - address: dirección de envío
 
   Ejemplo de body (JSON):
   {
     "quantity": 3,
     "address": "Calle Falsa 123, Madrid"
   }
 
4) Header Params:
   - auth-token: token de autenticación ficticio
   - client-id: id del cliente que hace la request
 
   Ejemplo de headers:
   auth-token: 123abc456
   client-id: web-app-01
 
REQUISITOS DEL ENDPOINT:
 
- Debe ser un POST en la ruta:
    /orders/:userId/products/:productId
 
- Debe:
  a) Leer correctamente:
     - req.params.userId y req.params.productId
     - req.query.status y req.query.priority
     - req.body.quantity y req.body.address
     - req.headers["auth-token"] y req.headers["client-id"]
 
  b) Hacer console.log de todos los parámetros (bien formateados).
 
  c) Responder con un JSON que incluya TODOS los datos recibidos,
     algo como:
 
     {
       "message": "Pedido recibido correctamente",
       "routeParams": {...},
       "queryParams": {...},
       "bodyParams": {...},
       "headerParams": {...}
     }
 
- Si falta algún dato importante (por ejemplo quantity o address),
  devolver un status 400 y un mensaje de error adecuado.
*/



app.post("/orders/:userId/products/:productId", (req, res)=>{

    const {userId, productId } = req.params;

    const { status, priority} = req.query;

    const {quantity, address} = req.body;

    const {auth_token, client_id} = req.headers;

    console.log("Parametros recibidos");
    console.log("Route params");
    console.log(`Userid: ${userId}\n productId: ${productId}`);
    console.log("Query params");

    console.log(`Status: ${status}\n Priority: ${priority}`);

    console.log("Route params");

    console.log(`Quantity: ${quantity}\n Address: ${address}`);
    console.log("Headers params");

    console.log(`AuthToken: ${auth_token}\n ClientId: ${client_id}`);

    if(!quantity || !address){
        return res.status(400).send("Faltan campos obligatorios en el body");

    }

    if(!auth_token || !client_id){
        return res.status(400).send("Faltan campos obligatorios en el header");

    }
    

    const response ={
        "message": "Pedido recibido correctamente",
        "routeParams": {userId, productId},
       "queryParams": {status, priority},
       "bodyParams": {quantity, address},
       "headerParams": {auth_token, client_id}
     }
    
     res.send(JSON.stringify(response));



    
    
    

})

app.patch("/users/:idUser", (req, res)=>{
    const idUser = req.params;
    console.log(idUser);
    
    res.send("bro")
})


