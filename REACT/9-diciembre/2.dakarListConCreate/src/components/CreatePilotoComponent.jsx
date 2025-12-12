import React, { useState } from 'react';

const CreatePilotoComponent = (props) => {
  const { createPiloto, backToList } = props;
  const [newPiloto, setNewPiloto] = useState({});

  const newPilotoHandler = (propName, propValue) => {
    const aux = {
      ...newPiloto,
      [propName]: propValue,
    };
    setNewPiloto(aux);
  };

  return (
    <div>
      <h2>Crear nuevo piloto</h2>
      <div>
        <label>
          Nombre{' '}
          <input
            type="text"
            onChange={(event) => {
              newPilotoHandler('nombre', event.target.value);
            }}
          />
        </label>
      </div>
      <div>
        <label>
          Pais de origen{' '}
          <input
            type="text"
            onChange={(event) => {
              newPilotoHandler('paisDeOrigen', event.target.value);
            }}
          />
        </label>
      </div>
      <div>
        <label>
          Fecha nacimiento{' '}
          <input
            type="text"
            onChange={(event) => {
              newPilotoHandler('fechaDeNacimiento', event.target.value);
            }}
          />
        </label>
      </div>
      <div>
        <label>
          Vehículo{' '}
          <input
            type="text"
            onChange={(event) => {
              newPilotoHandler('vehiculo', event.target.value);
            }}
          />
        </label>
      </div>
      <button
        onClick={() => {
          createPiloto(newPiloto);
        }}
      >
        Crear Piloto
      </button>
      <button
        onClick={() => {
          backToList();
        }}
      >
        Volver al listado
      </button>
    </div>
  );
};

export default CreatePilotoComponent;
