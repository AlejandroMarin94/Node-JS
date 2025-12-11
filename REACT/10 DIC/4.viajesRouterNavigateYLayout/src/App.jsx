import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CrearRutaPage from './pages/CrearRutaPage';
import InfoRutaPage from './pages/InfoRutaPage';
import ContactPage from './pages/ContactPage';
import MainLayout from './layout/MainLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<CrearRutaPage />} />
          <Route path="/info" element={<InfoRutaPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
