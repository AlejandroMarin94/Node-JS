import React from "react";
import TiendaLibroComponent from "./TiendaLibroComponent";

const DondeComprarLibroComponent = (props) => {
  const { listaTiendas } = props;

  return (
    <div>
      <h2>¿Donde puedes comprar este libro</h2>
      {listaTiendas.map((tienda) => (
        <TiendaLibroComponent key={tienda.id} tienda={tienda} />
      ))}
    </div>
  );
};

export default DondeComprarLibroComponent;

