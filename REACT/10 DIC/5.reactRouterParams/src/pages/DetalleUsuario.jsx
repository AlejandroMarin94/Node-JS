import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getUserById } from '../services/userFetch';

const DetalleUsuario = () => {
  const params = useParams();
  const navigate = useNavigate();

  const idUser = params.idUser;

  const [detailsUser, setDetailsUser] = useState(undefined);

  const loadDetailsUser = () => {
    const auxData = getUserById(idUser);
    setDetailsUser(auxData);
  };

  const goToList = () => {
    navigate('/');
  };

  useEffect(() => {
    loadDetailsUser();
  }, []);
  return (
    <div>
      {!detailsUser ? (
        <h2>Cargando datos....</h2>
      ) : (
        <>
          <h2>Drtalles del usuario</h2>
          <hr />
          <div>
            <p>Username: {detailsUser.username}</p>
            <p>Name: {detailsUser.name}</p>
          </div>
          <button onClick={goToList}>Volver a la lista</button>
        </>
      )}
    </div>
  );
};

export default DetalleUsuario;
