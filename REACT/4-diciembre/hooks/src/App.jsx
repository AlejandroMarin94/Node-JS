

import { useState } from 'react';
import './App.css'

function App() {

  const [name, setName] = useState("")
  let nombnreSinUseState ="";

  const cambioNombre = (newName)=>{
    nombnreSinUseState= newName
    console.log("Nombre sin useState:", nombnreSinUseState);
    
  }
  const [edad, setEdad] = useState(18)


  
  return (
    <>
      <div>
        <h3>Nombre sin useState {nombnreSinUseState}</h3>
        <div>
          <span>Nombre:</span>
          <input type="text"
           onChange={(event)=>cambioNombre(event.target.value)} />
        </div>
      </div>
      <div>
        <h3>Nombre con useState: {name}</h3>
        <div>
          <span>Nombre:</span>
          
          <input type="text" 
          value={name}
           onChange={(event)=>{setName(event.target.value)}} />
           <span>
            {
              name === "" ? "No has escrito nada aun" : `${name}`
            }
           </span>
        </div>
        <div>
          <h4>Edad {edad}</h4>

        </div>
        <div>
          <button onClick={()=>{setEdad(21)}}>Cambia tu edad a 21</button> 
        </div>
        <div>
          <button onClick={()=>{setEdad(edad+1)}}>Suma uno a tu edad</button> 

        </div>
      </div>
    </>
  )
}

export default App
