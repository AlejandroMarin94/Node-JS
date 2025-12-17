import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrementCount,
  incrementCount,
  modifyCountName,
  modifyCreatorName,
  resetCount,
} from './ContadorComponentActions';

const ContadorComponent = () => {
  const dispatch = useDispatch();
  /*
  const count = useSelector(
    (state) => state.contadorComponentReducer.count
  );
  const countName  = useSelector(
    (state) => state.contadorComponentReducer.countName
  );
  const creatorName  = useSelector(
    (state) => state.contadorComponentReducer.creatorName
  );
    state.contadorComponentReducer = {
        count: 0, 
        countName: "contador", 
        creatorName: "Alejandro"
    }
 
  */

  const { count, countName, creatorName } = useSelector(
    (state) => state.contadorComponentReducer
  );

  // Para versión con botón de guardar
  const [nameCount, setNameCount] = useState('contador2');
  const [nameCreator, setNameCreator] = useState('Alejandro2');

  const launchAction = (operator) => {
    switch (operator) {
      case '-':
        dispatch(decrementCount(count - 1));
        break;
      case 'RST':
        dispatch(resetCount(0));
        break;
      case '+':
      default:
        dispatch(incrementCount(count + 1));
        break;
    }
  };

  // Versión sin botón guardar
  const cambioNombreContador = (newName) => {
    dispatch(modifyCountName(newName));
  };

  const cambioNombreCreador = (newName) => {
    dispatch(modifyCreatorName(newName));
  };

  return (
    <div>
      <h2>Este ejercicio está hecho por {creatorName}</h2>
      <div>
        El {countName} vale {count}
      </div>
      <hr />
      <button onClick={() => launchAction('+')}>+</button>
      <button onClick={() => launchAction('RST')}>Reset</button>
      <button onClick={() => launchAction('-')}>-</button>
      <hr />

      {/** Versión sin botón guardar*/}
      <h3>Versión sin botón de guardar</h3>
      <div>
        <span>Nombre del contador: </span>
        <input
          type="text"
          value={countName || ''}
          onChange={(e) => cambioNombreContador(e.target.value)}
        />
      </div>
      <div>
        <span>Nombre del realizador: </span>
        <input
          type="text"
          value={creatorName || ''}
          onChange={(e) => cambioNombreCreador(e.target.value)}
        />
      </div>
      <hr />
      {/** Versión con botón guardar*/}
      <h3>Versión con botón de guardar</h3>
      <div>
        <span>Nombre del contador: </span>
        <input
          type="text"
          value={nameCount}
          onChange={(e) => setNameCount(e.target.value)}
        />
        <button onClick={() => cambioNombreContador(nameCount)}>Guardar</button>
      </div>
      <div>
        <span>Nombre del realizador: </span>
        <input
          type="text"
          value={nameCreator}
          onChange={(e) => setNameCreator(e.target.value)}
        />
        <button onClick={() => cambioNombreCreador(nameCreator)}>
          Guardar
        </button>
      </div>
    </div>
  );
};

export default ContadorComponent;
