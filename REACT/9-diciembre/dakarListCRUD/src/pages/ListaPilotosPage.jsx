import React, { useEffect, useState } from 'react';
import {
  createPilotoFetch,
  deletePilotoFetch,
  editPilotoFetch,
  getPilotoById,
  getPilotosFetch,
} from '../services/pilotosFetch';
import InfoPilotoComponent from '../components/InfoPilotoComponent';
import CreatePilotoComponent from '../components/CreatePilotoComponent';

const ListaPilotosPage = () => {
  const [listaPilotos, setListaPilotos] = useState();
  const [pilotoSelected, setPilotoSelected] = useState(undefined);
  const [registrarUsuarioMode, setRegistrarUsuarioMode] = useState(false);

  const loadPilotos = () => {
    //const auxData = getPilotos();
    //setListaPilotos(auxData);
    setListaPilotos(getPilotosFetch());
  };

  const deletePiloto = (idPiloto) => {
    // Llamo a borrar el piloto en fetch
    deletePilotoFetch(idPiloto);
    loadPilotos();
  };

  const loadInfoPiloto = (idPiloto) => {
    // Llamo a obtener su info desde fetch
    //const pilotoById = getPilotoById(idPiloto);
    //setPilotoSelected(pilotoById)
    setPilotoSelected(getPilotoById(idPiloto));
  };

  const unselectPiloto = () => {
    setPilotoSelected(undefined);
  };

  const createPiloto = (newPiloto) => {
    createPilotoFetch(newPiloto);
    disableRegistrarUsuarioMode();
    loadPilotos();
  };

  const disableRegistrarUsuarioMode = () => {
    setRegistrarUsuarioMode(false);
  };

  const editPiloto = (idPiloto, editedPiloto) => {
    editPilotoFetch(idPiloto, editedPiloto);
    loadPilotos();
  };

  // Entendido como que useEffect se ejecuta minimo una vez cuando
  // se carga el componente
  useEffect(() => {
    // Cargo la lista de pilotos
    loadPilotos();
  }, []);

  return (
    <div>
      {registrarUsuarioMode ? (
        <CreatePilotoComponent
          createPiloto={createPiloto}
          backToList={disableRegistrarUsuarioMode}
        />
      ) : (
        <>
          {!pilotoSelected && (
            <>
              <h2>Listado de pilotos</h2>
              <div>
                <button
                  onClick={() => {
                    setRegistrarUsuarioMode(true);
                  }}
                >
                  Crear nuevo piloto
                </button>
              </div>
            </>
          )}

          {!listaPilotos ? (
            <h2>Cargando lista de pilotos...</h2>
          ) : (
            <>
              {pilotoSelected ? (
                <InfoPilotoComponent
                  piloto={pilotoSelected}
                  showInfo
                  backToList={unselectPiloto}
                />
              ) : (
                <>
                  <hr />
                  {listaPilotos.map((p, idx) => (
                    <>
                      <InfoPilotoComponent
                        key={idx}
                        piloto={p}
                        deletePiloto={deletePiloto}
                        loadInfoPiloto={loadInfoPiloto}
                        editPiloto={editPiloto}
                      />
                      <hr />
                    </>
                  ))}
                </>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ListaPilotosPage;
