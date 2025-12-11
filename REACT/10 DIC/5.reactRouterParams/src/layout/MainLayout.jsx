import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <h2>Supuesto Header</h2>
      <Outlet />
      <h2>Supuesto Footer</h2>
    </div>
  );
};

export default MainLayout;
