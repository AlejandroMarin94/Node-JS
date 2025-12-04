import React, { useState } from "react";

const CalculadoraComponent = () => {
  const [num1, setNum1] = useState(undefined);
  const [num2, setNum2] = useState(undefined);
  const [resultado, setResultado] = useState(undefined);
  const [device, setDevice] = useState("DESKTOP");

  //operationType: 'SUMAR' | 'RESTAR' | 'MULTIPLICAR' | 'DIVIDIR'
  const operacion = (operationType) => {
    switch (operationType) {
      case "RESTAR":
        setResultado(num1 - num2);
        break;
      case "SUMAR":
        setResultado(num1 + num2);
        break;
      case "MULTIPLICAR":
        setResultado(num1 * num2);
        break;
      case "DIVIDIR":
        setResultado(num2 !== 0 ? num1 / num2 : 'No se puede dividir entre 0')
        break;
      case "POTENCIA":
        setResultado(num1 ** num2);
        break;
      default:
        reset();
    }
  };

  const reset = () => {
    setNum1(undefined);
    setNum2(undefined);
    setResultado(undefined);
  };

  return (
    <div>
      <h1>Calculadora</h1>
      <div>
        <h2>Valores - ( número 1 (operación) número 2)</h2>
        <div>
          <span>Número 1:</span>
          <input
            type="number"
            onChange={(e) => setNum1(Number.parseInt(e.target.value))}
          />
        </div>
        <div>
          <span>Número 2:</span>
          <input
            type="number"
            onChange={(e) => setNum2(Number.parseInt(e.target.value))}
          />
        </div>
      </div>
      <div>
        <button onClick={() => operacion("RESTAR")}>Restar</button>
        <button onClick={() => operacion("SUMAR")}>Sumar</button>
        <button onClick={() => operacion("MULTIPLICAR")}>Multiplicar</button>
        <button onClick={() => operacion("DIVIDIR")}>Dividir</button>
        <button onClick={() => operacion("POTENCIA")}>Potencia</button>
      </div>
      {resultado ? (
        <div>
          <h3>Resultado: {resultado}</h3>
        </div>
      ) : (
        <div>
          <h3>Aún no hay ningún resultado</h3>
        </div>
      )}
    </div>
  );
};

export default CalculadoraComponent;
