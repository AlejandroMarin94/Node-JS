import React from 'react'

const TiendaLibroComponent = ({tienda}) => {
  return (
    <li>
      <strong>{tienda.name}</strong> - {tienda.address}
    </li>
  )
}

export default TiendaLibroComponent