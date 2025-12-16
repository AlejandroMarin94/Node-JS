import { combineReducers } from 'redux';
import exampleComponentReducer from '../../components/ExampleComponent/ExampleComponentReducer';

const reducer = combineReducers({
  // Aqui iran todos los reducers que creemos de los componentes
  exampleComponentReducer,
});

export default reducer;
