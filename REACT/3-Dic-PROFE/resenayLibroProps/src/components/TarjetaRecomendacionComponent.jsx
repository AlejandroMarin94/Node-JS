import React from "react";

const TarjetaRecomendacionComponent = ({libroRecomendado}) => {
  return (
    <>
      <div>
        <p>ISBN: {libroRecomendado.ISBN}</p>
        <p>title: {libroRecomendado.title}</p>
        <p>author: {libroRecomendado.author}</p>
        <p>description: {libroRecomendado.description}</p>
        {libroRecomendado.destacado && <p><strong>Recomendación destacada</strong></p>}
        <hr />
      </div>
    </>
  );
};

export default TarjetaRecomendacionComponent;
