import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUsers } from '../services/userFetch';

const ListaUsuarios = () => {
  const navigate = useNavigate();
  const [userList, setUserList] = useState([]);

  const loadUsers = () => {
    const userAux = getUsers();
    setUserList(userAux);
  };

  const goToDetailsPage = (idUser) => {
    const url = `/detalle/${idUser}`;
    navigate(url);
  };

  useEffect(() => {
    loadUsers();
  }, []);
  return (
    <div>
      {!userList || userList.length === 0 ? (
        <h3>Cargando los datos...</h3>
      ) : (
        <>
          <h3>Listado de usuarios</h3>
          <hr />
          {userList.map((u, idx) => (
            <div key={idx}>
              <p>Id: {u.id}</p>
              <p>Username: {u.username}</p>
              <p>Name: {u.name}</p>
              <button
                onClick={() => {
                  goToDetailsPage(u.id);
                }}
              >
                Ver detalles
              </button>
              <hr />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ListaUsuarios;
