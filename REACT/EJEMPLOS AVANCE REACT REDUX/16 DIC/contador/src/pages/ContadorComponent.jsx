import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCount,
  incrementCount,
  reset,
} from "./ContadorComponentActions";

const ContadorComponent = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.contadorComponentReducer.count);

  const launchAction = (operator) => {
    switch (operator) {
      case "+":
      default:
        dispatch(incrementCount(count + 1));
        break;
      case "-":
        dispatch(decrementCount(count - 1));
        break;

      case "reset":
        dispatch(reset());
        break;
    }
  };

  return (
    <div>
      <h2>Este ejercicio está hecho por: </h2>
      <div>El contador vale {count}</div>
      <hr />
      <button onClick={() => launchAction("+")}>+</button>
      <button onClick={() => launchAction("-")}>-</button>
      <button onClick={() => launchAction("reset")}>RESET</button>
    </div>
  );
};

export default ContadorComponent;
