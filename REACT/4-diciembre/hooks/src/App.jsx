

import { useState } from 'react';
import './App.css'

function App() {

  const [name, setName] = useState("")
  let nombnreSinUseState ="";

  const cambioNombre = (newName)=>{
    nombnreSinUseState= newName
    console.log("Nombre sin useState:", nombnreSinUseState);
    
  }
  
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
           onChange={(event)=>{setName(event.target.value)}} />
        </div>
      </div>
    </>
  )
}

export default App
