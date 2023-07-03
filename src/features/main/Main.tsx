import React from 'react';
import { Outlet } from 'react-router-dom';
import OverviewCopy from '../Overview/OverviewCopy';
import ContactsCopy from '../contacts/ContactsCopy';
import PhotoGallery from '../photoGallery/PhotoGallery';
import VideoGallery from '../../videoGallery/VideoGallery';
import Header from '../header/Header';

function Main(): JSX.Element {
  return (
    <>
      <Header />
      <OverviewCopy />
      <VideoGallery />
      <PhotoGallery />
      <ContactsCopy />
      {/* <h1 className="mb-1">Список дел Алишера</h1> */}
      <Outlet />
      {/* <NavBar /> */}
    </>
  );
}

export default Main;
