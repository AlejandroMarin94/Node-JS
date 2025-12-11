import React from 'react';

const VeranoComponent = (props) => {
  const { changeToInvierno } = props;
  return (
    <div>
      <p>Estamos en Verano</p>
      <button
        onClick={() => {
          changeToInvierno();
        }}
      >
        Apetece algo de fresquito!
      </button>
    </div>
  );
};

export default VeranoComponent;
