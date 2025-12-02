
import './App.css'
import HolaMundoComponent from './components/HolaMundoComponent'
import VehiculoComponent from './components/VehiculoComponent'

function App() {

  const title = "Estamos intentando aprender ReactJS, sin morir en el intento"
  const segunda = "Segunda constante"
  

  return (
    <>
      <p>{title}</p>
      <hr />
      <p>{segunda}</p>
      <hr />
      <HolaMundoComponent/>
      <VehiculoComponent/>
       
    </>
  )
}

export default App
