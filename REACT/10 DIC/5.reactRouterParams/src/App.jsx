import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ListaUsuarios from './pages/ListaUsuarios';
import DetalleUsuario from './pages/DetalleUsuario';
import MainLayout from './layout/MainLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<ListaUsuarios />} />
          <Route path="/detalle/:idUser" element={<DetalleUsuario />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
