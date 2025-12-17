import { combineReducers } from 'redux';
import taskListPageReducer from '../../../pages/TaskListPages/TaskListPageReducer';

const reducer = combineReducers({
  // Aqui iran todos los reducers que creemos de los componentes
  taskListPageReducer,
});

export default reducer;
