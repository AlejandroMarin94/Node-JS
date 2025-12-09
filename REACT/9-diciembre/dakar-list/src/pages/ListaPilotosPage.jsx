import React, { useEffect, useState } from 'react';
import {
  deletePilotoFetch,
  getPilotoById,
  getPilotosFetch,
} from '../services/pilotosFetch';
import InfoPilotoComponent from '../components/InfoPilotoComponent';

const ListaPilotosPage = () => {
  const [listaPilotos, setListaPilotos] = useState();
  const [pilotoSelected, setPilotoSelected] = useState(undefined);

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

  // Entendido como que useEffect se ejecuta minimo una vez cuando
  // se carga el componente
  useEffect(() => {
    // Cargo la lista de pilotos
    loadPilotos();
  }, []);

  return (
    <div>
      {!listaPilotos ? (
        <h2>Cargando lista de pilotos...</h2>
      ) : (
        <>
          {pilotoSelected ? (
            <InfoPilotoComponent piloto={pilotoSelected} readOnly />
          ) : (
            <>
              <h2>Listado de pilotos</h2>
              <hr />
              {listaPilotos.map((p, idx) => (
                <>
                  <InfoPilotoComponent
                    key={idx}
                    piloto={p}
                    deletePiloto={deletePiloto}
                    loadInfoPiloto={loadInfoPiloto}
                  />
                  <hr />
                </>
              ))}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ListaPilotosPage;
