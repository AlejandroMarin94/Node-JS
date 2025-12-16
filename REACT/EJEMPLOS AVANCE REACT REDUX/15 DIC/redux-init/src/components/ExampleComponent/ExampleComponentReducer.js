import { EDIT_VALOR, SET_VALOR } from './ExampleComponentActions';

const initialState = {
  // Aquí iran las variables que creemos para el estado de su componente
  valorEjemplo: 'Hola',
};

const exampleComponentReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VALOR:
      return {
        ...state,
        valorEjemplo: action.payload.nuevoValor,
      };
    case EDIT_VALOR:
      return {
        ...state,
        valorEjemplo: action.payload.valorEditado,
      };
    default:
      return state;
  }
};

export default exampleComponentReducer;
