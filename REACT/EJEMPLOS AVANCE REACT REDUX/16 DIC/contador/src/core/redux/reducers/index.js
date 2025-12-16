import { combineReducers } from 'redux';
import contadorComponentReducer from '../../../pages/ContadorComponentReducer';

const reducer = combineReducers({
  // Aquí iran los reducers que creemos
  contadorComponentReducer,
});

export default reducer;
