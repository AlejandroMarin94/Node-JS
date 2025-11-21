/*Configura CORS para permitir peticiones desde tu frontend en http://localhost:5173.
 
Asegúrate de tener express.json() para leer el body en JSON.
 
## Ejercicio 1 – GET /movies
 
Crea un endpoint que devuelva todas las películas del array bbddMocked.
 
Si existe -> Respuesta: listado completo en JSON.
Si no existe -> Respuesta: Mensaje comunicancdo que no hay peliculas para listar
 
## Ejercicio 2 – GET /movies/:id
 
Crea un endpoint que devuelva una película concreta por id.
 
Si existe → devolver la película.
Si no existe → status 404 y mensaje "Película no encontrada".
 
## Ejercicio 3 – POST /movies
 
Crea un endpoint para añadir una película nueva al array.
 
Body (JSON): titulo, descripcion, anio, valoracion, poster_img.
Se debe verificar en el backEnd que todos los campos llegan.
 
El servidor generará un id nuevo (incremental).
 
Si ok -> Respuesta: la película creada con su id.
 
## Ejercicio 4 – PUT /movies/:id
 
Crea un endpoint para reemplazar completamente una película.
 
Comprobacion en el backend -> Body debe contener todos los campos (titulo, descripcion, anio, valoracion, poster_img).
 
Si la película no existe → Status 404 y mensaje de error.
Si se reemplaza ok -> Respuesta: película actualizada.
 
## Ejercicio 5 – PATCH /movies/:id/rating
 
Crea un endpoint para actualizar solo la valoración (valoracion) de una película.
 
Body (JSON): { "valoracion": 9.5 }
 
Si la película no existe → Status 404 y mensaje de error.
Si ok -> Respuesta: película con la nueva valoración.
 
## Ejercicio 6 – DELETE /movies/:id
 
Crea un endpoint para borrar una película.
 
Si existe → borrarla y devolver mensaje de éxito.
Si no existe → Status 404 y mensaje de error.

*/

// Array de películas mockeadas para usar en el servidor

const movies = [
  {
    id: 1,
    titulo: "El Club de la Lucha",
    descripcion:
      "Un narrador insomne conoce a un vendedor de jabón que cambiará su vida.",
    anio: 1999,
    valoracion: 8.8,
    poster_img: "https://example.com/posters/fight_club.jpg",
  },
  {
    id: 2,
    titulo: "Matrix",
    descripcion: "Un hacker descubre la verdadera naturaleza de su realidad.",
    anio: 1999,
    valoracion: 8.7,
    poster_img: "https://example.com/posters/matrix.jpg",
  },
  {
    id: 3,
    titulo: "Origen",
    descripcion:
      "Un ladrón que roba secretos del subconsciente recibe la misión inversa.",
    anio: 2010,
    valoracion: 8.8,
    poster_img: "https://example.com/posters/inception.jpg",
  },
  {
    id: 4,
    titulo: "Interstellar",
    descripcion:
      "Un grupo de exploradores viaja a través de un agujero de gusano.",
    anio: 2014,
    valoracion: 8.6,
    poster_img: "https://example.com/posters/interstellar.jpg",
  },
  {
    id: 5,
    titulo: "El Señor de los Anillos: La Comunidad del Anillo",
    descripcion: "Un hobbit hereda un anillo con un poder oscuro.",
    anio: 2001,
    valoracion: 8.8,
    poster_img: "https://example.com/posters/lotr_fellowship.jpg",
  },
  {
    id: 6,
    titulo: "El Señor de los Anillos: Las Dos Torres",
    descripcion: "La Compañía se separa mientras la sombra de Mordor crece.",
    anio: 2002,
    valoracion: 8.7,
    poster_img: "https://example.com/posters/lotr_two_towers.jpg",
  },
  {
    id: 7,
    titulo: "El Señor de los Anillos: El Retorno del Rey",
    descripcion: "La batalla final por la Tierra Media.",
    anio: 2003,
    valoracion: 9.0,
    poster_img: "https://example.com/posters/lotr_return_king.jpg",
  },
  {
    id: 8,
    titulo: "Pulp Fiction",
    descripcion: "Historias entrecruzadas de crimen, redención y hamburguesas.",
    anio: 1994,
    valoracion: 8.9,
    poster_img: "https://example.com/posters/pulp_fiction.jpg",
  },
  {
    id: 9,
    titulo: "Forrest Gump",
    descripcion:
      "La vida de un hombre sencillo en medio de grandes acontecimientos.",
    anio: 1994,
    valoracion: 8.8,
    poster_img: "https://example.com/posters/forrest_gump.jpg",
  },
  {
    id: 10,
    titulo: "Cadena Perpetua",
    descripcion: "La historia de una amistad en una dura prisión.",
    anio: 1994,
    valoracion: 9.3,
    poster_img: "https://example.com/posters/shawshank.jpg",
  },
  {
    id: 11,
    titulo: "Gladiator",
    descripcion: "Un general romano traicionado busca venganza como gladiador.",
    anio: 2000,
    valoracion: 8.5,
    poster_img: "https://example.com/posters/gladiator.jpg",
  },
  {
    id: 12,
    titulo: "El Caballero Oscuro",
    descripcion: "Batman se enfrenta a su mayor desafío: el Joker.",
    anio: 2008,
    valoracion: 9.0,
    poster_img: "https://example.com/posters/dark_knight.jpg",
  },
  {
    id: 13,
    titulo: "Whiplash",
    descripcion:
      "Un joven baterista empujado al límite por su exigente profesor.",
    anio: 2014,
    valoracion: 8.5,
    poster_img: "https://example.com/posters/whiplash.jpg",
  },
  {
    id: 14,
    titulo: "La La Land",
    descripcion:
      "Un pianista de jazz y una actriz persiguen sus sueños en Los Ángeles.",
    anio: 2016,
    valoracion: 8.0,
    poster_img: "https://example.com/posters/lalaland.jpg",
  },
  {
    id: 15,
    titulo: "Parásitos",
    descripcion:
      "Una familia pobre se infiltra en la vida de una familia rica.",
    anio: 2019,
    valoracion: 8.6,
    poster_img: "https://example.com/posters/parasite.jpg",
  },
];

module.exports = movies;
/*
## Ejercicio 1 – GET /movies
 
Crea un endpoint que devuelva todas las películas del array bbddMocked.
 
Si existe -> Respuesta: listado completo en JSON.
Si no existe -> Respuesta: Mensaje comunicancdo que no hay peliculas para listar
 
 */

/*## Ejercicio 2 – GET /movies/:id
 
Crea un endpoint que devuelva una película concreta por id.
 
Si existe → devolver la película.
Si no existe → status 404 y mensaje "Película no encontrada".
 */

/*## Ejercicio 3 – POST /movies
 
Crea un endpoint para añadir una película nueva al array.
 
Body (JSON): titulo, descripcion, anio, valoracion, poster_img.
Se debe verificar en el backEnd que todos los campos llegan.
 
El servidor generará un id nuevo (incremental).
 
Si ok -> Respuesta: la película creada con su id.
*/

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

//////////1
app.get("/movies", (req, res) => {
  if (movies.length === 0) {
    return res.send("No se han encontrado peliculas");
  }

  res.send(movies);
});

///////////////2

app.get("/movies/:id", (req, res) => {
  const { id } = req.params;

  const pelicula = movies.find((p) => p.id === Number(id));

  res.send(pelicula);
});
//////////////3

app.post("/movies", (req, res) => {
  const { titulo, descripcion, anio, valoracion, poster_img } = req.body;

  if (!titulo || !descripcion || !anio || !valoracion || !poster_img) {
    res.status(404).send("Faltan datos para poder mostrar peliculas");
  }

  const newMovie = {
    id: movies.length + 1,
    titulo,
    descripcion,
    anio,
    valoracion,
    poster_img,
  };
  console.log(movies);
  movies.push(newMovie);

  return res.send(newMovie);
});

/*## Ejercicio 4 – PUT /movies/:id
 
Crea un endpoint para reemplazar completamente una película.
 
Comprobacion en el backend -> Body debe contener todos los campos (titulo, descripcion, anio, valoracion, poster_img).
 
Si la película no existe → Status 404 y mensaje de error.
Si se reemplaza ok -> Respuesta: película actualizada.
*/

app.put("/movies/:id", (req, res) => {
  const { titulo, descripcion, anio, valoracion, poster_img } = req.body;
  const id = Number(req.params.id);

  if (!titulo || !descripcion || !anio || !valoracion || !poster_img) {
    res.status(404).send("Faltan datos para poder mostrar peliculas");
  }

  let index = -1;
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].id === id) {
      index = i;
      break;
    }
  }

  const movieIndex = movies.findIndex((m)=> m.id ===id);
  if(movieIndex ===-1){
    return res.status(404).send("No se ha encontrado la pelicula")
  }

  const newMovie = {
    id,
    titulo,
    descripcion,
    anio,
    valoracion,
    poster_img,
  };
  console.log(movies);

  movies[movieIndex] = newMovie;

  console.log(movies);

  res.send(JSON.stringify(movies));
});
/*
## Ejercicio 5 – PATCH /movies/:id/rating
 
Crea un endpoint para actualizar solo la valoración (valoracion) de una película.
 
Body (JSON): { "valoracion": 9.5 }
 
Si la película no existe → Status 404 y mensaje de error.
Si ok -> Respuesta: película con la nueva valoración.
*/
app.patch("/movies/:id/rating", (req, res) => {

    const {valoracion} = req.body;
  const id = Number(req.params.id);

  const movieToChange = movies.find((m) => m.id === id);
  movieToChange.valoracion = valoracion;

  


  
  
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
