import React from "react";

const RecomendacionesLibroComponent = (props) => {
  const { ejemplo1, recomendaciones } = props;
  console.log(recomendaciones);
  
  return (
    <div>
      <h3>Recomendaciones</h3>
      {recomendaciones.map((r, idx) => (
        <div key={idx}>
          <p>Title: {r.title}</p>
          <p>ISBN: {r.ISBN}</p>
          <p>Autor: {r.author}</p>
          <p>Description: {r.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecomendacionesLibroComponent;
