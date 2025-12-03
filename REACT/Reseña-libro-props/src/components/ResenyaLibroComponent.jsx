import React from 'react'
import TarjetaResenyaComponent from './TarjetaResenyaComponent'

export const ResenyaLibroComponent = (props) => {
  const {ejemplo1, reviewList, numeroResenyas, tituloSeccion}= props
    
  return (
 <div>
        <h2>{tituloSeccion}</h2>
        <h3>Cantidad reseñas: {numeroResenyas}</h3>
        
        {
            reviewList.map((r,idx)=> (
            <TarjetaResenyaComponent resenya={r} index={idx} />
            ))
        };

        

    </div>
    
    )
}



export default ResenyaLibroComponent