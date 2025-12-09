import React, { useState } from "react";

const MultiplicadorComponent = () => {
  const [multiplicador, setMultiplicador] = useState(0);
  const [infoMessage, setInfoMessage] = useState("");
  const LIMITE = 100;

  const multiplicar = (valorParaMultiplicar) => {
    
    if (multiplicador > LIMITE) {
      setInfoMessage("Has llegado al límite");
      return;
    }
    if (multiplicador !== 0) {
      setInfoMessage("");
      setInfoMessage(`Se ha multiplicado por ${valorParaMultiplicar}`);
      setMultiplicador(multiplicador * valorParaMultiplicar);
      
      if (multiplicador * valorParaMultiplicar > LIMITE) {
      setInfoMessage("Has llegado al límite");
      
      return;
    }
    } else {
      setInfoMessage(
        "El valor te lo puse a 1 porque era 0 y 0 por lo que sea es 0."
      );
      setMultiplicador(1);
    }
  };

  const reset = () => {
    setMultiplicador(0);
  };

  return (
    <div>
      <div>
        <h1>Multiplicador</h1>
        <div>
          <p>El resultado del multiplicador es: {multiplicador}</p>
          <p>{infoMessage}</p>
        </div>
        <div>
          {/* Estas son posibles soluciones pero no son las ideales

                    <button onClick={() => setMultiplicador(multiplicador * 2)}>x2</button> 
                    <button onClick={() => setMultiplicador(multiplicador === 0 ? 1 : multiplicador * 2)}>x2</button> 
                
                */}

          <button onClick={() => multiplicar(2)}>x2</button>
          <button onClick={() => multiplicar(3)}>x3</button>
          <button onClick={() => multiplicar(5)}>x5</button>
          <button onClick={reset}>reset</button>
        </div>
      </div>
    </div>
  );
};

export default MultiplicadorComponent;
