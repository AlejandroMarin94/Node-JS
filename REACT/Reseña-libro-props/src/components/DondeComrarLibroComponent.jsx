import React from "react";

const DondeComprarLibroComponent = (props) => {
  
  const {ejemplo1, listaTiendas}=props

  return (
    <div>
      <h2>¿Donde puedes comprar este libro</h2>
      {listaTiendas.map((tienda, idx) => (
        <div key={idx}>
          <h4>Nombre: {tienda.name}</h4>
          <p>Direccion: {tienda.address}</p>
        </div>
      ))}
    </div>
  );
};

export default DondeComprarLibroComponent;
