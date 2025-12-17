import {
  DECREMENT,
  INCREMENT,
  MODIFY_COUNT_NAME,
  MODIFY_CREATOR_NAME,
  RESET,
} from './ContadorComponentActions';

const initialState = {
  count: 0,
  countName: 'contador',
  creatorName: 'Alejandro',
};

const contadorComponentReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
    case DECREMENT:
    case RESET:
      return {
        ...state,
        count: action.payload.newValue,
      };
    case MODIFY_COUNT_NAME:
      return {
        ...state,
        countName: action.payload.newName,
      };
    case MODIFY_CREATOR_NAME:
      return {
        ...state,
        creatorName: action.payload.newName,
      };

    default:
      return state;
  }
};

export default contadorComponentReducer;
