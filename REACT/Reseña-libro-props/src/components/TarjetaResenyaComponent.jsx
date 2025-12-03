import React from "react";

const TarjetaResenyaComponent = (props) => {
  const { resenya ,index, numero} = props;
  return (
    <div key={index}>

      <h4>Nombre: {resenya.name}</h4>
      <h3>Numero: #{numero}</h3>
      <p>Fecha: {resenya.created_at}</p>
      <p>Reseña: {resenya.review}</p>
    </div>
  );
};



export default TarjetaResenyaComponent;
