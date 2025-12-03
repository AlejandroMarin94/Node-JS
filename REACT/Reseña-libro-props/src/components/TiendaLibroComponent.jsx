import React from 'react'

const TiendaLibroComponent = (props) => {
    const {tienda} = props
  return (
    <div>
       <h4><strong>{tienda.name}</strong></h4> 
       <p>Direccion: {tienda.address}</p>
        </div>
  )
}

export default TiendaLibroComponent