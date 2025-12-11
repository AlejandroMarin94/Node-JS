import { useState } from 'react';
import './App.css';
import MainLayout from './layout/MainLayout';
import VeranoComponent from './components/VeranoComponent';
import InviernoComponent from './components/InviernoComponent';

function App() {
  const [currentStation, setCurrentStation] = useState('INVIERNO'); // VERANO - INVIERNO

  const changeToVerano = () => {
    setCurrentStation('VERANO');
  };

  const changeToInvierno = () => {
    setCurrentStation('INVIERNO');
  };
  return (
    <>
      <MainLayout>
        {currentStation === 'VERANO' ? (
          <VeranoComponent changeToInvierno={changeToInvierno} />
        ) : (
          <InviernoComponent changeToVerano={changeToVerano} />
        )}
      </MainLayout>
    </>
  );
}

export default App;
