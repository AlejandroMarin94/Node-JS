import React from "react";
import TarjetaRecomendacionComponent from "./TarjetaRecomendacionComponent";

const RecomendacionesLibros = (props) => {
  const { librosRecomendados } = props;

  return (
    <div>
      <h2>Recomendaciones</h2>
      {librosRecomendados.map((libroRecomendado, index) => (
        <TarjetaRecomendacionComponent
          key={index}
          libroRecomendado={libroRecomendado}
        />
        /*
                <div key={index}>
                    <p>ISBN: {libroRecomendado.ISBN}</p>
                    <p>title: {libroRecomendado.title}</p>
                    <p>author: {libroRecomendado.author}</p>
                    <p>description: {libroRecomendado.description}</p>
                </div>
                */
      ))}
    </div>
  );
};

export default RecomendacionesLibros;
