import React from "react";
import { useState } from "react";

const CalculadoraComponent = () => {
  const [multiplicador, setMultiplicador] = useState(0);

  const multiplicar = (valorParaMultiplicar) =>{
    if(multiplicador !==0){
        setMultiplicador(multiplicador * valorParaMultiplicar)
    } else{
        setMultiplicador(1)
    }
  }

  return (
    <>
      <div>
        <h2>Multiplicador</h2>
        <div>
          <button onClick={()=> multiplicar(2)}>x2</button>
          <button onClick={()=> multiplicar(3)}>x3</button>
          <button onClick={()=> multiplicar(0)}>Reset</button>
          <span> Resultado multiplicador: {multiplicador}</span>
        </div>
      </div>
    </>
  );
};

export default CalculadoraComponent;
