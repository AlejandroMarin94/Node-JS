import { INCREMENT } from './ContadorComponentActions';

const initialState = {
  count: 0,
};

const contadorComponentReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: action.payload.newValue,
      };
    default:
      return state;
  }
};

export default contadorComponentReducer;
