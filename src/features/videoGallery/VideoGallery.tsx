import React, { useContext } from 'react';
import style from './VideoGallery.module.css';
import { LanguageContext } from '../../LanguageContext';
import t from './translation';

function VideoGallery(): JSX.Element {
    const { language } = useContext(LanguageContext);
    const videoUrl = t('video', language);
    const videoURLs = [
        { videoUrl }
    ];

    return (
        <div className={style.videoGallery}>
            <div className={style.videoContainer}>
        <video src={videoURLs[0].videoUrl} className={style.video} controls autoPlay loop muted />
            </div>
        </div>
    );
}

export default VideoGallery;
