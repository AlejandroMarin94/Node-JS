import React from "react";
import TarjetaResenyaComponent from "./TarjetaResenyaComponent";

export const ResenyaLibroComponent = (props) => {
  const { reviewList, numeroResenyas, tituloSeccion } = props;

  return (
    <div>
      <h2>{tituloSeccion}</h2>
      <h3>Cantidad reseñas: {numeroResenyas}</h3>

      {reviewList.map((r, index) => (
        <TarjetaResenyaComponent resenya={r} numero={index + 1} key={r.id} />
      ))}
    </div>
  );
};

export default ResenyaLibroComponent;
