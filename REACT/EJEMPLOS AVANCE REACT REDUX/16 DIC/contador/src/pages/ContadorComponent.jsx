import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementCount } from './ContadorComponentActions';

const ContadorComponent = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.contadorComponentReducer.count);

  const launchAction = (operator) => {
    switch (operator) {
      case '+':
      default:
        dispatch(incrementCount(count + 1));
        break;
    }
  };

  return (
    <div>
      <h2>Ejemplo Contador React Redux</h2>
      <div>El contador vale {count}</div>
      <hr />
      <button onClick={() => launchAction('+')}>+</button>
    </div>
  );
};

export default ContadorComponent;
