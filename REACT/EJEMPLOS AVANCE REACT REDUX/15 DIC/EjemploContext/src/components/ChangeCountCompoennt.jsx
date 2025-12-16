import React, { useContext, useEffect, useEffectEvent, useState } from 'react';
import { CounterContext } from '../CounterContext';

const ChangeCountCompoennt = () => {
  const { count, setCount, infoUser, setInfoUser } = useContext(CounterContext);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleChanges = (propName, PropValue) => {
    const auxInfo = {
      ...infoUser,
      [propName]: PropValue,
    };
    setInfoUser(auxInfo);
  };

  return (
    <>
      <div>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleDecrement}>-</button>
      </div>
      <div>
        <label>
          Cambiar nombre:
          <input
            type="text"
            value={infoUser?.name ?? ''}
            onChange={(e) => {
              handleChanges('name', e.target.value);
            }}
          />
        </label>
        <hr />
        <label>
          Cambiar Apellido:
          <input
            type="text"
            value={infoUser?.lastName ?? ''}
            onChange={(e) => {
              handleChanges('lastName', e.target.value);
            }}
          />
        </label>
      </div>
    </>
  );
};

export default ChangeCountCompoennt;
