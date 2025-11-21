// EJERCICIO 1:
//   Crea un servidor HTTP que tenga estas rutas:

//   - GET /
//     Respuesta: "Bienvenido a mi primer servidor"

//   - GET /about
//     Respuesta: "Acerca de mí: (nombre del alumno)"

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
// Nota: const ahora = new Date().toISOString();

// EJERCICIO 4
// Crear un proyecto de Vite básico, donde solo se vea un boton en la web,
// Dicho boton, al hacer click llamara a la ruta http://localhost:3000/info y mostrará por consola el resultado de esda petición
// Nota: Usar async-await
// EXTRA: Por CORS, necesitareis poner:
// res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
// res.setHeader("Access-Control-Allow-Methods", "GET,POST");
// res.setHeader("Access-Control-Allow-Headers", "Content-Type");

// EJERCICIO 5:
// Ampliar ejercicio antrerior, con las siguiente modificaciones:
// FRONT:
// Hacer peticion a una ruta http://localhost:3000/login, pasandole un email y una contraseña que se recoja de dos campos input de un formulario.
// Estos campos iran dentro del body a la hora de enviar la peticion fetch

// BACK:
// Tener un array de objetos de usuario, con el formato: user = {name, email, pass, role} donde role puede ser "admin" o "user"
// En la ruta para recibir la peticion del back, deberemos comporbar si existe un usuario que coincida
// su email, pass y role.
// De ser asi, devolvemos ese usuario y lo mostramos por consola
// Sino, dos opciones:
//      Si coincide usuario y contraseña, devolver mensaje de no tiene privilegios
//      Si no coinciden, devolver mensaje de email o contraseña invalidos.

// USANDO EXPRESS

// EJERCICIO 6:
//   Crea un index.js con Express que tenga una ruta GET '/' que devuelva:
//   "Bienvenido a mi API con Express"

// EJERCICIO 7:
//   Añade una nueva ruta:
//   - GET /about
//     Devuelve: "Soy (nombre del alumno) y esta es mi API de prueba"

// EJERCICIO 8:
//   Instalar Nodemon y añadir en package.json:
//     "dev": "nodemon index.js"
//   Probar a ejecutar npm run dev.

// RECEPCION DE PARAMS

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

// EJERCICIO 11:
//   Crear una ruta POST /movies que reciba una película en req.body
//   y la añada al array.

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
   - authToken: token de autenticación ficticio
   - clientId: id del cliente que hace la request

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
     - req.headers["authToken"] y req.headers["clientId"]

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

// PRACTICA REALIZAR APIREST BASICA COMPLETA CON LO DADO HASTA AHORA
/*
Configura CORS para permitir peticiones desde tu frontend en http://localhost:5173.

Asegúrate de tener express.json() para leer el body en JSON.

## Ejercicio 13 – GET /movies

Crea un endpoint que devuelva todas las películas del array bbddMocked.

Si existe -> Respuesta: listado completo en JSON.
Si no existe -> Respuesta: Mensaje comunicancdo que no hay peliculas para listar

## Ejercicio 14 – GET /movies/:id

Crea un endpoint que devuelva una película concreta por id.

Si existe → devolver la película.
Si no existe → status 404 y mensaje "Película no encontrada".

## Ejercicio 15 – POST /movies

Crea un endpoint para añadir una película nueva al array.

Body (JSON): titulo, descripcion, anio, valoracion, poster_img.
Se debe verificar en el backEnd que todos los campos llegan.

El servidor generará un id nuevo (incremental).

Si ok -> Respuesta: la película creada con su id.

## Ejercicio 16 – PUT /movies/:id

Crea un endpoint para reemplazar completamente una película.

Comprobacion en el backend -> Body debe contener todos los campos (titulo, descripcion, anio, valoracion, poster_img).

Si la película no existe → Status 404 y mensaje de error.
Si se reemplaza ok -> Respuesta: película actualizada.

## Ejercicio 17 – PATCH /movies/:id/rating

Crea un endpoint para actualizar solo la valoración (valoracion) de una película.

Body (JSON): { "valoracion": 9.5 }

Si la película no existe → Status 404 y mensaje de error.
Si ok -> Respuesta: película con la nueva valoración.

## Ejercicio 18 – DELETE /movies/:id

Crea un endpoint para borrar una película.

Si existe → borrarla y devolver mensaje de éxito.
Si no existe → Status 404 y mensaje de error.
*/
