import React, { useState } from 'react';
import style from './PhotoGallery.module.css';

function PhotoGallery() :JSX.Element {
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

    const photos = [
        '/hotel-gallery/gallery_2.jpg',
        '/hotel-gallery/gallery_8.jpg',
        '/hotel-gallery/gallery_3.jpg',
        '/hotel-gallery/gallery_24.jpg',
        '/hotel-gallery/gallery_5.jpg',
        '/hotel-gallery/gallery_6.jpg',
        '/hotel-gallery/gallery_17.jpg',
        '/hotel-gallery/gallery_18.jpg',
        '/hotel-gallery/gallery_9.jpg',
        '/hotel-gallery/gallery_10.jpg',
        '/hotel-gallery/gallery_11.jpg',
        '/hotel-gallery/gallery_12.jpg',
        '/hotel-gallery/gallery_13.jpg',
        '/hotel-gallery/gallery_4.jpg',
        '/hotel-gallery/gallery_15.jpg',
        '/hotel-gallery/gallery_16.jpg',
        '/hotel-gallery/gallery_7.jpg',
        '/hotel-gallery/gallery_27.jpg',
        '/hotel-gallery/gallery_19.jpg',
        '/hotel-gallery/gallery_20.jpg',
        '/hotel-gallery/gallery_1.jpg',
        '/hotel-gallery/gallery_21.jpg',
        '/hotel-gallery/gallery_22.jpg',
        '/hotel-gallery/gallery_14.jpg',
        '/hotel-gallery/gallery_25.jpg',
        '/hotel-gallery/gallery_26.jpg',
        '/hotel-gallery/gallery_23.jpg',
        '/hotel-gallery/gallery_28.jpg',
    ];

    const handlePrevPhoto = (): void => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1));
    };

    const handleNextPhoto = (): void => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className={style.photoGallery}>
            <div className={style.photoContainer}>
            <div className={style.titleContainer}>
            <h1 className={style.title}>HOTEL GALLERY</h1>
            </div>
            <img src={photos[currentPhotoIndex]} alt="" className={style.photo} />
            </div>
            <div className={style.arrowContainer}>
                <button type="button" className={style.prevArrow} onClick={handlePrevPhoto}>{'<'}</button>
                <button type="button" className={style.nextArrow} onClick={handleNextPhoto}>{'>'}</button>
            </div>
        </div>
    );
}

export default PhotoGallery;
