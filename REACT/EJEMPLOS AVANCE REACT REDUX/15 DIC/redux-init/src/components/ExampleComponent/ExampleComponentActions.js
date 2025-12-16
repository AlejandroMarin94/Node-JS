// Definicion de las acciones
// Se encarga de definir que acciones se pueden ejecutar,
// no lo que hace en si, sino como se llamaran
export const SET_VALOR = 'SET_VALOR';
export const EDIT_VALOR = 'EDIT_VALOR';

// Creamos los creados o ejecutores de esa accion
// El obejtivo de estas funciones es devolver un objeto con un type
// y un payload que será entendido e interpretado por Redux (Su reducer)
export const ponerValor = (nuevoValor) => {
  return {
    type: SET_VALOR,
    payload: {
      nuevoValor,
    },
  };
};

export const modifyValor = (valorEditado) => {
  return {
    type: EDIT_VALOR,
    payload: {
      valorEditado,
    },
  };
};
