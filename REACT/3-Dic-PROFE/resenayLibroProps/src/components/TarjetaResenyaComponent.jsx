import React from 'react';

// Ejercicio 5
const TarjetaResenyaComponent = (props) => {
  const { resenya, numero } = props;
  return (
    <div key={numero}>
      <h3>
        Reseña {numero}# - {resenya.name}
      </h3>
      <p>{resenya.review}</p>
    </div>
  );
};

export default TarjetaResenyaComponent;
