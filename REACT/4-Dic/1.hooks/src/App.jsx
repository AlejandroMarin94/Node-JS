import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState(18);

  let nombreSinUseState = "Nombrecito";

  const cambioNombre = (newName) => {
    nombreSinUseState = newName;
  };
  const cumplir21 = () => {
    setEdad(21);
  };
  const incrementarEdad = () => {
    setEdad(edad + 1);
  };

  const handleChangeNuevoNombre = (e) => {
    setNombre(e.target.value);
  };

  return (
    <>
      <div>
        <div>Nombre sin useState: {nombreSinUseState}</div>
        <div>
          <span>Nombre:</span>
          <input
            type="text"
            onChange={(event) => cambioNombre(event.target.value)}
          />
        </div>
      </div>
      <div>
        <div>Nombre con useState: {nombre}</div>
        <div>
          <span>Nombre:</span>
          <input
            type="text"
            placeholder="Escribe un nombre..."
            value={nombre}
            onChange={handleChangeNuevoNombre}
          />
          <hr />
          {nombre === "" ? (
            <span>No has escrito nada aún</span>
          ) : (
            <span>Estás escribiendo: {nombre}</span>
          )}
          <p>Edad actual: {edad} años</p>
          <button onClick={cumplir21}>Cumplir 21</button>
          <button onClick={incrementarEdad}>+1 año</button>
        </div>
      </div>
    </>
  );
}

export default App;
