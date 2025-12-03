import React from 'react'

const TarjetaRecomendacionesComponent = (props) => {
    const {recomendaciones}= props
  return (
    <div>
      <h4>Titulo: {recomendaciones.title}</h4>
      <p>Hola soy un texto breve</p>

      {recomendaciones.destacado && (
        <p>Recomendacion destacada</p>
      )}
      
    </div>
  )
}

export default TarjetaRecomendacionesComponent