import React, { useContext } from 'react';
import { CounterContext } from '../CounterContext';

const InfoUserComponent = () => {
  const { infoUser } = useContext(CounterContext);
  return (
    <h3>
      Bienvenido {infoUser.name} {infoUser.lastName}
    </h3>
  );
};

export default InfoUserComponent;
