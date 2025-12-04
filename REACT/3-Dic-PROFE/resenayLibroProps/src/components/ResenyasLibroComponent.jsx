import React from 'react';
import TarjetaResenyaComponent from './TarjetaResenyaComponent';

const ResenyasLibroComponent = (props) => {
  const { reviewList, numeroResenyas, tituloSeccion } = props;

  return (
    <div>
      <h2>{tituloSeccion}</h2>
      <h3>Total de reseñas: {numeroResenyas}</h3>
      {reviewList.map((review, index) => (
        /* Ejercicio 5 y 6 */
        <TarjetaResenyaComponent resenya={review} numero={index+1} />
        /*
        <div key={index}>
          <p>Name: {review.name}</p>
          <p>Date: {review.created_at}</p>
          <p>Review: {review.review}</p>
        </div>
        */
      ))}
    </div>
  );
};

export default ResenyasLibroComponent;
