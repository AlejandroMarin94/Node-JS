import { Provider } from 'react-redux';
import './App.css';
import store from './core/store/store';
import ExampleComponent from './components/ExampleComponent/ExampleComponent';

function App() {
  return (
    <Provider store={store}>
      <ExampleComponent />
    </Provider>
  );
}

export default App;
