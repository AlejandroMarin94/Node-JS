import React from "react";

const CabeceraTiendaComponent = () => {
  const titulo = "Bienvenido a mi tienda React";
  const subtitulo = "Aquí verás una lista de libros de ejemplo";

  return (
    <>
      <h1>{titulo}</h1>
      <p>{subtitulo}</p>
    </>
  );
};

export default CabeceraTiendaComponent;
