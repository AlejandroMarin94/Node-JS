import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainLayout from './layout/MainLayout';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/** El layout se metre en la ruta "/" que es la que envolverá a las demás!
         * Cuando usamos un Route abierto con otros dentro, se le llama Rutas anidadas
         * Estas rutas anidadas se mostrarán en mi MainLayout gracias a "<Outlet/>"
         */}
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
