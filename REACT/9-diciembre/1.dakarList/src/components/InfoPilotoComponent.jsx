import React from 'react';

const InfoPilotoComponent = (props) => {
  const { piloto, deletePiloto, loadInfoPiloto, readOnly } = props;

  return (
    <div>
      <div>
        <span>Id: </span>
        <span>{piloto.id}</span>
      </div>
      <div>
        <span>Nombre: </span>
        <span>{piloto.nombre}</span>
      </div>
      <div>
        <span>Pais de origen: </span>
        <span>{piloto.paisDeOrigen}</span>
      </div>
      <div>
        <span>Fecha de Nacimiento: </span>
        <span>{piloto.fechaDeNacimiento}</span>
      </div>
      <div>
        <span>Vehiculo: </span>
        <span>{piloto.vehiculo}</span>
      </div>
      {!readOnly && (
        <div>
          <button onClick={() => deletePiloto(piloto.id)}>Eliminar</button>
          <button
            onClick={() => {
              loadInfoPiloto(piloto.id);
            }}
          >
            Seleccionar
          </button>
        </div>
      )}
    </div>
  );
};

export default InfoPilotoComponent;
