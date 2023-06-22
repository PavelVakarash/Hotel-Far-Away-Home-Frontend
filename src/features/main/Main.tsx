import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './HomePage';

function Main(): JSX.Element {
  return (
    <>
      <HomePage />
      <h1 className="mb-1">Список дел Алишера</h1>
      <Outlet />
      <NavBar />
    </>
  );
}

export default Main;
