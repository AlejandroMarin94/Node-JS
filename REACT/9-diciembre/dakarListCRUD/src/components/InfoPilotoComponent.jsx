import React, { useState } from 'react';

const InfoPilotoComponent = (props) => {
  const {
    piloto,
    deletePiloto,
    loadInfoPiloto,
    showInfo,
    backToList,
    editPiloto,
  } = props;
  const [editMode, setEditMode] = useState(false);

  const [editedPiloto, setEditedPiloto] = useState({});

  //const [initialPilotoData, setInitialPilotoData] = useState(piloto);

  let initialPilotoData = { ...piloto };

  const editedPilotoHandler = (propName, propValue) => {
    const aux = {
      ...editedPiloto,
      [propName]: propValue,
    };
    setEditedPiloto(aux);
  };

  const cancelarEdicion = () => {
    setEditMode(false);
  };

  return (
    <div>
      <div>
        {!editMode && (
          <>
            <span>Id: </span>
            <span>{piloto.id}</span>
          </>
        )}
      </div>
      <div>
        <span>Nombre: </span>
        {!editMode ? (
          <span>{piloto.nombre}</span>
        ) : (
          <input
            name="nombre"
            value={initialPilotoData.nombre}
            type="text"
            onChange={(event) => {
              editedPilotoHandler('nombre', event.target.value);
            }}
          />
        )}
      </div>
      <div>
        <span>Pais de origen: </span>
        {!editMode ? (
          <span>{piloto.paisDeOrigen}</span>
        ) : (
          <input
            value={initialPilotoData.paisDeOrigen}
            type="text"
            onChange={(event) => {
              editedPilotoHandler('paisDeOrigen', event.target.value);
            }}
          />
        )}
      </div>
      <div>
        <span>Fecha de Nacimiento: </span>
        {!editMode ? (
          <span>{piloto.fechaDeNacimiento}</span>
        ) : (
          <input
            type="text"
            value={initialPilotoData.fechaDeNacimiento}
            onChange={(event) => {
              editedPilotoHandler('fechaDeNacimiento', event.target.value);
            }}
          />
        )}
      </div>
      <div>
        <span>Vehiculo: </span>
        {!editMode ? (
          <span>{piloto.vehiculo}</span>
        ) : (
          <input
            type="text"
            value={initialPilotoData.vehiculo}
            onChange={(event) => {
              editedPilotoHandler('vehiculo', event.target.value);
            }}
          />
        )}
      </div>
      {!showInfo ? (
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
      ) : (
        <>
          {!editMode ? (
            <div>
              <button
                onClick={() => {
                  backToList();
                }}
              >
                Volver al listado
              </button>
              <button
                onClick={() => {
                  setEditMode(true);
                }}
              >
                Modificar
              </button>
            </div>
          ) : (
            <div>
              <button
                onClick={() => {
                  editPiloto(piloto.id, editedPiloto);
                }}
              >
                Guardar cambios
              </button>
              <button onClick={() => cancelarEdicion()}>Cancelar</button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default InfoPilotoComponent;
