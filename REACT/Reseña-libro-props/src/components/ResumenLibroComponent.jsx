import React from 'react'

const ResumenLibroComponent = (props) => {
    const{resumen} = props
  return (
    <div>
        <h2>Titulo {resumen.titulo}</h2>
        <p>Autor: {resumen.autor} ({resumen.anio})</p>
        <p>Paginas: {resumen.paginas}</p>
        <p>Parrafo: {resumen.genero}</p>
    
    </div>
  )
}

export default ResumenLibroComponent