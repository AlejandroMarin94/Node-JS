const express = require('express');
const cors = require('cors');
const moviesData = require('./bbddMocked');

const app = express();

// ================= CORS ========================
app.use(
  cors({
    origin: 'http://localhost:5173',
  })
);

// Para poder leer JSON en el body
app.use(express.json());

// Uso una copia del array para poder mutarlo sin tocar el original importado
let movies = [...moviesData];

// Endpoint de prueba rápido
app.get('/', (req, res) => {
  res.send('API de películas funcionando');
});

// EJERCICIO 1: GET - Listar todas las películas
app.get('/movies', (req, res) => {
  res.status(200).json(movies);
});

// EJERCICIO 2: GET - Obtener una película por id
app.get('/movies/:idMovie', (req, res) => {
  const { idMovie } = req.params;
  const movie = movies.find((m) => m.id === Number(idMovie));

  if (!movie) {
    return res.status(404).send('Película no encontrada');
  }

  res.status(200).json(movie);
});

// EJERCICIO 3: POST - Crear una nueva película
app.post('/movies', (req, res) => {
  const { titulo, descripcion, anio, valoracion, poster_img } = req.body;

  // Validación muy básica
  if (!titulo || !descripcion || !anio || !valoracion || !poster_img) {
    return res
      .status(400)
      .send(
        'Faltan algún campos obligatorio: titulo, descripcion, anio, valoracion, poster_img'
      );
  }

  // Generar nuevo id (máximo + 1) Tb con sort
  const maxId = movies.length > 0 ? Math.max(...movies.map((m) => m.id)) : 0;
  const newMovie = {
    id: maxId + 1,
    titulo,
    descripcion,
    anio,
    valoracion,
    poster_img,
  };

  movies.push(newMovie);
  console.log(movies);

  res.status(201).json(newMovie);
});

// EJERCICIO 4: PUT - Reemplazar completamente una película
app.put('/movies/:idMovie', (req, res) => {
  const { idMovie } = req.params;
  const movieIndex = movies.findIndex((m) => m.id === Number(idMovie));

  if (movieIndex === -1) {
    return res.status(404).send('Película no encontrada');
  }

  const { titulo, descripcion, anio, valoracion, poster_img } = req.body;

  // Comprobar que vienen todos los campos (PUT = reemplazo completo)
  if (!titulo || !descripcion || !anio || valoracion == null || !poster_img) {
    return res
      .status(400)
      .send(
        'PUT requiere TODOS los campos: titulo, descripcion, anio, valoracion, poster_img'
      );
  }

  const updatedMovie = {
    id: Number(idMovie),
    titulo,
    descripcion,
    anio,
    valoracion,
    poster_img,
  };

  movies[movieIndex] = updatedMovie;
  console.log(movies);

  res.status(200).json(updatedMovie);
});

// EJERCICIO 5: PATCH - Actualizar solo la valoración
app.patch('/movies/:idMovie/rating', (req, res) => {
  const { idMovie } = req.params;
  const movieIndex = movies.findIndex((m) => m.id === Number(idMovie));

  if (movieIndex === -1) {
    return res.status(404).send('Película no encontrada');
  }

  const { valoracion } = req.body;

  if (!valoracion) {
    return res
      .status(400)
      .send("PATCH /rating requiere que el campo 'valoracion' esté en el body");
  }

  movies[movieIndex].valoracion = valoracion;

  res.status(200).json(movies[movieIndex]);
});

// EJERCICIO 6: DELETE - Borrar una película por id
app.delete('/movies/:idMovie', (req, res) => {
  const { idMovie } = req.params;
  const movieIndex = movies.findIndex((m) => m.id === Number(idMovie));

  if (movieIndex === -1) {
    return res.status(404).send('Película no encontrada');
  }

  // Eliminamos la película del array
  const deleted = movies.splice(movieIndex, 1)[0];

  res.status(200).json({
    message: 'Película borrada correctamente',
    deleted,
  });
});

// Arrancar servidor
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
