import React from 'react';
import { Link } from 'react-router-dom';

const MenuComponent = () => {
  return (
    <nav
      style={{ display: 'flex', gap: '20px', justifyContent: 'space-between' }}
    >
      <Link to={'/'}>HomePage</Link>
      <Link to={'/contact'}>Contact</Link>
      <Link to={'/about'}>About Us</Link>
    </nav>
  );
};

export default MenuComponent;
