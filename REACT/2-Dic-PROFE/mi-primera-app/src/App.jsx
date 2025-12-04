import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HolaMundoComponent from './components/HolaMundoComponent'
import PresentacionComponent from './components/PresentacionComponent'

function App() {
  const titulo = "Alejandro lo intenta"
  const segunda = "Pepitpo"
  // Ejercicio 1
  const tercera = "Texto de prueba para la tercera constante"

  return (
    <>
  <p>{titulo}</p>
  <hr/>
  <p>{segunda}</p>
  <hr />
  {/*Ejercicico 1*/}
  <p>{tercera}</p>
  {/*Ejercicico 2*/}
  <HolaMundoComponent />
  <HolaMundoComponent />
  <HolaMundoComponent />
  {/*Ejercicico 4*/}
  <PresentacionComponent />
    </>
  )
}

export default App
