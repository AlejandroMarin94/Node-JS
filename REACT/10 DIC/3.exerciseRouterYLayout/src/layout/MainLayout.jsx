import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import { Outlet } from 'react-router';
import FooterComponent from '../components/FooterComponent';

const MainLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </>
  );
};

export default MainLayout;
