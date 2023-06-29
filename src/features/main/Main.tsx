import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import NavBar from '../navbar/NavBar';
import Footer from '../footer/Footer';
import OverviewCopy from '../Overview/OverviewCopy';
import ContactsCopy from '../contacts/ContactsCopy';
import PhotoGallery from '../photoGallery/PhotoGallery';
import VideoGallery from '../../videoGallery/VideoGallery';

function Main(): JSX.Element {
  return (
    <>
      <NavBar />
      <Header />
      <OverviewCopy />
      <VideoGallery />
      <PhotoGallery />
      <ContactsCopy />
      <Footer />
      {/* <h1 className="mb-1">Список дел Алишера</h1> */}
      <Outlet />
      {/* <NavBar /> */}
    </>
  );
}

export default Main;
