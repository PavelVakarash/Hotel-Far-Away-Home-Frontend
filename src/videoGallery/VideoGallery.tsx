import React from 'react';
import style from './VideoGallery.module.css';

function VideoGallery() :JSX.Element {
    const videoURLs = [
        '/hotel-gallery/far_away_hotel.mp4'
    ];

    return (
        <div className={style.videoGallery}>
            <div className={style.videoContainer}>
                <video src={videoURLs[0]} className={style.video} controls autoPlay loop muted />
            </div>
        </div>
    );
}

export default VideoGallery;
