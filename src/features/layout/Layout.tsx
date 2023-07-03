import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import NavBar from '../navbar/NavBar';

export default function Layout(): JSX.Element {
  return (
      <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
