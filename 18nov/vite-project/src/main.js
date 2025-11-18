import "./style.css";


// EJERCICIO 4
// Crear un proyecto de Vite básico, donde solo se vea un boton en la web,
// Dicho boton, al hacer click llamara a la ruta http://localhost:3000/info y mostrará por consola el resultado de esda petición
// Nota: Usar async-await
// EXTRA: Por CORS, necesitareis poner:
  // res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  // res.setHeader("Access-Control-Allow-Methods", "GET");
  // res.setHeader("Access-Control-Allow-Headers", "Content-Type");

const button = document.createElement("button");
button.className = "buttonClass";
button.textContent = "Haz click aqui";

const container = document.createElement("div");
container.className = "containerClass";

const app = document.querySelector("#app");

container.appendChild(button);
app.appendChild(container);

async function llamada() {
  try {
    const res = await fetch("http://localhost:3000/info");
    if (!res.ok) {
      throw new Error("No se han encontrado los datos");
    }
    const response = await res.json();
    console.log(response.data);
    
  } catch {
    console.log("la llamada no ha funcionado");
  }
}

button.addEventListener("click", () => llamada());




