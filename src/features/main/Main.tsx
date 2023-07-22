import React from 'react';
import { Outlet } from 'react-router-dom';
import Overview from '../Overview/Overview';
import Contacts from '../contacts/Contacts';
import PhotoGallery from '../photoGallery/PhotoGallery';
import VideoGallery from '../videoGallery/VideoGallery';
import Header from '../header/Header';

function Main(): JSX.Element {
  return (
    <>
      <Header />
      <Overview />
      <VideoGallery />
      <PhotoGallery />
      <Contacts />
      {/* <h1 className="mb-1">Список дел Алишера</h1> */}
      <Outlet />
      {/* <NavBar /> */}
    </>
  );
}

export default Main;
