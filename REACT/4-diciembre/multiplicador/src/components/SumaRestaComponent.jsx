import React from "react";
import { useState } from "react";

const SumaRestaComponent = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [resultado, setResultado] = useState(0);
  /*
  const restando = (numero) => setRestar(restar - numero);
  const sumando = (numero2) => setSumar(sumar - numero2);
  */

  return (
    <div>
      <h2>Sumar Y Resta</h2>
      <div>
        <span>N1:</span>
        <input
          type="number"
          onChange={(event) => setNum1(Number(event.target.value))}
        />
      </div>
      <div>
        <span>N2:</span>
        <input
          type="number"
          onChange={(event) => setNum2(Number(event.target.value))}
        />
      </div>
      <hr />
      <div>
        <button onClick={() => {setResultado(num1+num2)}}>Sumar</button>
        <button onClick={() => {setResultado(num1-num2)}}>Restar</button>
      </div>

      <div>
        <span>Resultado: {resultado}</span>
       
       
      </div>
    </div>
  );
};

export default SumaRestaComponent;
