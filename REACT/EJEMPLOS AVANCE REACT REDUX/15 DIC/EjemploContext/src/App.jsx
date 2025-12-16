import { useEffect, useState } from 'react';
import './App.css';
import { CounterContext } from './CounterContext';
import ShowCounterComponent from './components/ShowCounterComponent';
import ChangeCountCompoennt from './components/ChangeCountCompoennt';
import InfoUserComponent from './components/InfoUserComponent';

function App() {
  const [count, setCount] = useState(0);
  const [infoUser, setInfoUser] = useState({});

  const datosCompartidos = {
    count,
    setCount,
    infoUser,
    setInfoUser,
  };

  useEffect(() => {
    setInfoUser({
      name: 'Alejandro',
      lastName: 'García Serrano',
      userName: 'alegarse',
    });
  }, []);

  return (
    <CounterContext.Provider value={datosCompartidos}>
      <h2>Datos compartidos por Context</h2>
      <InfoUserComponent />
      <ShowCounterComponent />
      <ChangeCountCompoennt />
    </CounterContext.Provider>
  );
}

export default App;
