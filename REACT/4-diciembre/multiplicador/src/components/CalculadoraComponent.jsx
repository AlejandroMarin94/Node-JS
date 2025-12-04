import React from "react";
import { useState } from "react";

const CalculadoraComponent = () => {
  const [multiplicador, setMultiplicador] = useState(0);
  const [mensaje, setMensaje] = useState("");

  const limit = 100;

  const multiplicar = (valorParaMultiplicar) => {
    if (multiplicador > limit) {
      setMensaje(" Has llegado al limite");
      return;
    }
    if(multiplicador *valorParaMultiplicar > limit){
      setMensaje ("La siguiente operacion supera el limite")
      setMultiplicador(multiplicador)
      return;
    }
    if (multiplicador !== 0) {
      const nuevoValor = multiplicador * valorParaMultiplicar;
      setMultiplicador(nuevoValor);
      setMensaje("");

      if (nuevoValor % 5 === 0) {
        setMultiplicador(nuevoValor);
        setMensaje(" Has multiplicado por 5");
      }
    } else {
      setMultiplicador(1);
    }
  };

  const reset = () => {
    setMultiplicador(1);
    setMensaje("");
  };
  return (
    <>
      <div>
        <h2>Multiplicador</h2>
        <div>
          <button onClick={() => multiplicar(2)}>x2</button>
          <button onClick={() => multiplicar(3)}>x3</button>
          <button onClick={() => multiplicar(5)}>x5</button>

          <button onClick={reset}>Reset</button>
          <span>
            {" "}
            Resultado multiplicador: {multiplicador}
            {mensaje}
          </span>
        </div>
      </div>
    </>
  );
};

export default CalculadoraComponent;
