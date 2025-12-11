import React from 'react';
import { Link } from 'react-router-dom';

const MenuComponent = () => {
  return (
    <nav
      style={{ display: 'flex', gap: '20px', justifyContent: 'space-between' }}
    >
      <Link to={'/'}>Crear viaje</Link>
      <Link to={'/info'}>Ver info del viaje</Link>
      <Link to={'/contact'}>Contacto</Link>
    </nav>
  );
};

export default MenuComponent;
