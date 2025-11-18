



const http = require("http");
const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("hola, nodejs está funcionando.");

  } else if (req.method === "GET" && req.url === "/info") {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("hola, nodejs está funcionando con informacion.");

  } else {
    res.writeHead(404, { "Content-type": "text/plain" });
    res.end("No se ha encontrado la ruta");
  }
});

server.listen(3000, () => {
  console.log("servidor escuchando en http//localhost:3000");
});


