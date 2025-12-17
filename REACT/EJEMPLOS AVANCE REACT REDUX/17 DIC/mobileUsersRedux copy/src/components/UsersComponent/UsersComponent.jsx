import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../core/services/usersFetch";
import {
  loadUsersAction,
  selectFavUserAction,
  selectUserAction,
} from "./UsersComponentActions";
import usersComponentReducer from "./UsersComponentReducer";

const UsersComponent = () => {
  const [showFavorites, setShowFavorites] = useState(false);
  const dispatch = useDispatch();
  const { users, userSelected } = useSelector(
    (state) => state.usersComponentReducer
  );

  // Aqui llamo al estado global del componente MobileComponent (accedo a su reducer que es su "almacen de datos")
  const { mobiles } = useSelector((state) => state.mobileComponentReducer);

  const loadUsers = () => {
    const auxData = getAllUsers();
    dispatch(loadUsersAction(auxData));
  };

  const selectUserHandler = (userData) => {
    dispatch(selectUserAction(userData));
  };

  const resetUserSelected = () => {
    dispatch(selectUserAction(undefined));
  };

  // Esta fucnion está accediendo al contenido obtenido del reducer del otro componente (mobileComponentReducer)
  const getInfoMobileById = (idMobile) => {
    const auxMobileData = mobiles.find((m) => m.id === idMobile);
    if (!auxMobileData) {
      return " no dispone de ningun movil.";
    } else {
      return ` tiene el movil ${auxMobileData.brand} ${auxMobileData.model}.`;
    }
  };

  const setFavoriteUser = (idUser) => {
    dispatch(selectFavUserAction(idUser));
  };

  let favoriteUsers = [];
  if (showFavorites) {
    favoriteUsers = users.filter((u) => u.favorite === true);
  } else {
    favoriteUsers = users;
  }

  useEffect(() => {
    loadUsers();
  }, []);
  return (
    <div>
      <h2>
        Total usuarios {users?.length}
        <button onClick={loadUsers}>Select</button>
      </h2>
      <span>
        {" "}
        <button onClick={() => setShowFavorites(true)}>FAV</button>Mostrar solo
        los FAVS
      </span>
      {!users ? (
        <h2>Cargando datos...</h2>
      ) : (
        favoriteUsers.map((u, idx) => (
          <div
            key={idx}
            style={{
              display: "flex",
              gap: "50px",
              alignItems: "center",
              justifyContent: "space-between",
              margin: "5px",
            }}
          >
            <span>
              {u.username} {u.password}
            </span>
            <button onClick={() => setFavoriteUser(u.id)}>
              {u.favorite ? "FAV" : "NO FAV"}
            </button>
            <button onClick={() => selectUserHandler(u)}>Select</button>
          </div>
        ))
      )}
      <hr />
      {!userSelected ? (
        <h4>No se ha seleccionado ningún usuario</h4>
      ) : (
        <div
          style={{
            display: "flex",
            gap: "15px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span>
            El usuario {userSelected.username}{" "}
            {getInfoMobileById(userSelected.mobile)}
          </span>
          <button onClick={resetUserSelected}>Clear selected</button>
        </div>
      )}
    </div>
  );
};

export default UsersComponent;
