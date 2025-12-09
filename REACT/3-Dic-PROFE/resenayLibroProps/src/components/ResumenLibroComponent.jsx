import React from "react";

const ResumenLibroComponent = ({ resumen }) => {
  return (
    <div>
      <h2>Resumen del libro</h2>
      <p>Autor: {resumen.autor} | Año: {resumen.anio}</p>
      <p>Número de páginas: {resumen.paginas}</p>
      <p>Género: {resumen.genero}</p>
    </div>
  );
};

export default ResumenLibroComponent;
