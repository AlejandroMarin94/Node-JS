import { Provider } from 'react-redux';
import './App.css';
import store from './core/redux/store/store';
import ContadorComponent from './pages/ContadorComponent';

function App() {
  return (
    <Provider store={store}>
      <ContadorComponent />
    </Provider>
  );
}

export default App;
