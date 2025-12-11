import React from 'react';

const InviernoComponent = (props) => {
  const { changeToVerano } = props;
  return (
    <div>
      <p>Estamos en Invierno</p>
      <button
        onClick={() => {
          changeToVerano();
        }}
      >
        Que llegue el solecito ya!
      </button>
    </div>
  );
};

export default InviernoComponent;
