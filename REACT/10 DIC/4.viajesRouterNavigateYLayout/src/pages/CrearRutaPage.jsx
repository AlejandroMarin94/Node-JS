import React, { useState } from 'react';
import MenuComponent from '../components/MenuComponent';
import { useNavigate } from 'react-router-dom';

const CrearRutaPage = () => {
  const [travel, setTravel] = useState({});
  const navigate = useNavigate();

  const travelHandler = (propName, PropValue) => {
    setTravel({
      ...travel,
      [propName]: PropValue,
    });
  };

  const checkFields = () => {
    const errorFound = false;
    //if algun input vacio, errorFound = true;
    if (errorFound) {
      // Muestro en pantalla un mensaje de error y hago return
    } else {
      createTravel();
    }
  };

  const createTravel = () => {
    navigate('/info', {
      state: {
        travel,
      },
    });
  };

  return (
    <div>
      <h2>Crear nuevo viaje</h2>
      <hr />
      <div>
        <div>
          <span>Nombre:</span>
          <input
            type="text"
            onChange={(event) => {
              travelHandler('name', event.target.value);
            }}
          />
        </div>
        <div>
          <span>Fecha:</span>
          <input
            type="text"
            onChange={(event) => {
              travelHandler('date', event.target.value);
            }}
          />
        </div>
        <div>
          <span>Presupuesto:</span>
          <input
            type="text"
            onChange={(event) => {
              travelHandler('pres', event.target.value);
            }}
          />
        </div>
        <div>
          <span>Viajeros:</span>
          <input
            type="text"
            onChange={(event) => {
              travelHandler('travelers', event.target.value);
            }}
          />
        </div>
        <button
          onClick={() => {
            createTravel();
          }}
        >
          Crear y ver info del viaje
        </button>
      </div>
    </div>
  );
};

export default CrearRutaPage;
