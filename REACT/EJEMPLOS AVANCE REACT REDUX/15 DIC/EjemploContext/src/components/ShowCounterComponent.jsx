import React from 'react';
import { useContext } from 'react';
import { CounterContext } from '../CounterContext';

const ShowCounterComponent = () => {

    // Leemos los datos de count desde el contexto compartido en Appp
  const { count } = useContext(CounterContext);

  return <p>El contador vale: {count}</p>;
};

export default ShowCounterComponent;
