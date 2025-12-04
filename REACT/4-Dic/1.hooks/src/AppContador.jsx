import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //Variables de estado:
  /*
    const [${nombreVariable}, ${nombreFuncionActualizacion}] = useState(${valorInicial})

  */
  const [count, setCount] = useState(0)

  //Variables de Javascript
  /// Forma de crearla: let ${nombreVariable} = ${valorInicial}
  let contador = 0

  //NUNCA NUNCA NUNCA Debemos usar las variables de Javascript para mostrar información en el HTML ya que entonces perderíamos la Reactividad de nuestra app.

  const incrementarContador = () => {
    contador = contador + 1
    console.log('contador', contador);
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => incrementarContador()}>
          Contador es {contador}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
