import { combineReducers } from 'redux';
import usersComponentReducer from '../../../components/UsersComponent/UsersComponentReducer';
import mobileComponentReducer from '../../../components/MobileComponent/MobileComponentReducer';

const reducer = combineReducers({
  // Aqui iran todos los reducers que creemos de los componentes
  usersComponentReducer,
  mobileComponentReducer,
});

export default reducer;
