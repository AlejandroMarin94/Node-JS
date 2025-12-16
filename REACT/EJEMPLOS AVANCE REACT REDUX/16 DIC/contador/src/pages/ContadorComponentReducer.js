import { DECREMENT, INCREMENT, RESET } from './ContadorComponentActions';

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

      case DECREMENT:
      return {
        ...state,
        count: action.payload.newValue,
      };

      case RESET:
      return initialState
       
      
    default:
      
      return state;
  }
};

export default contadorComponentReducer;
