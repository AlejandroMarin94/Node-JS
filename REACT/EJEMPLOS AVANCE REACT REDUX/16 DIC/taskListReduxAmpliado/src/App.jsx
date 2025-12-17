import { Provider } from 'react-redux';
import './App.css';
import store from './core/redux/store/store';
import TaskFormComponent from './components/TaskFormComponent';
import TaskListPage from './pages/TaskListPages/TaskListPage';

function App() {
  return (
    <Provider store={store}>
      <h2>Lista de tareas</h2>
      <TaskFormComponent />
      <TaskListPage />
    </Provider>
  );
}

export default App;
