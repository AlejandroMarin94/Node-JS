import React from 'react';
import MenuComponent from '../components/MenuComponent';
import { useLocation, useNavigate } from 'react-router-dom';

const InfoRutaPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { state } = location;

  const travel = state?.travel;

  const deleteTravel = () => {
    navigate('/');
  };

  return (
    <div>
      {!travel ? (
        <h2>No hay ningun viaje creado</h2>
      ) : (
        <>
          <h2>Info del viaje</h2>
          <div>
            <span>Nombre: {travel.name}</span>
            <hr />
            <span>Fecha: {travel.date}</span>
            <hr />
            <span>Presupuesto: {travel.pres}</span>
            <hr />
            <span>Viajeros: {travel.travelers}</span>
          </div>
          <button
            onClick={() => {
              deleteTravel();
            }}
          >
            Eliminar viaje
          </button>
        </>
      )}
    </div>
  );
};

export default InfoRutaPage;
