import { Provider } from 'react-redux';
import './App.css';
import store from './core/redux/store/store';
import ExamplePage from './pages/ExamplePage/ExamplePage';

function App() {
  return <Provider store={store}>
    <ExamplePage />
  </Provider>;
}

export default App;
