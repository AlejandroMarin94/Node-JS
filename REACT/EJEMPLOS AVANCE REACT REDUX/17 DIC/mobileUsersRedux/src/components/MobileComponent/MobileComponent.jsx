import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMobiles } from '../../core/services/mobileFetch';
import {
  loadMobilesAction,
  selectMobileAction,
} from './MobileComponentActions';

const MobileComponent = () => {
  const dispatch = useDispatch();
  const { mobiles, mobileSelected } = useSelector(
    (state) => state.mobileComponentReducer
  );

  const loadMobiles = () => {
    const auxData = getAllMobiles();
    dispatch(loadMobilesAction(auxData));
  };

  const selectMobileHandler = (mobileData) => {
    dispatch(selectMobileAction(mobileData));
  };

  const resetMobileSelected = () => {
    dispatch(selectMobileAction(undefined));
  };

  useEffect(() => {
    loadMobiles();
  }, []);
  return (
    <div>
      {!mobiles || mobiles.length === 0 ? (
        <h2>Cargando datos....</h2>
      ) : (
        <>
          {mobiles.map((m, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                gap: '50px',
                alignItems: 'center',
                justifyContent: 'space-between',
                margin: '5px',
              }}
            >
              <span>
                {m.brand} {m.model} {m.year}
              </span>
              <button onClick={() => selectMobileHandler(m)}>Select</button>
            </div>
          ))}
          <hr />
          {!mobileSelected ? (
            <h4>No hay movil seleccionado</h4>
          ) : (
            <div
              style={{
                display: 'flex',
                gap: '15px',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              {JSON.stringify(mobileSelected)}
              <button onClick={resetMobileSelected}>Clear selected</button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MobileComponent;
