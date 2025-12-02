import "./App.css";
import HolaMundoComponent from "./components/HolaMundoComponent";
import PresentacionComponent from "./components/PresentacionComponent";
import VehiculoComponent from "./components/VehiculoComponent";

function App() {
  const title = "Estamos intentando aprender ReactJS, sin morir en el intento";
  const segunda = "Segunda constante";
  const tercera = "Texto de prueba para la tercera constante";

  return (
    <>
    <p>{title}</p>
      <hr />
      <p>{segunda}</p>
      <hr />
      <p>{tercera}</p>
      <hr />

      <HolaMundoComponent />
      <HolaMundoComponent />
      <HolaMundoComponent />

      <VehiculoComponent />
      <PresentacionComponent/>
      
    </>
  );
}

export default App;
