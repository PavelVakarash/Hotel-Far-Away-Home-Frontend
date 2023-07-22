import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Services.module.css';
import { LanguageContext } from '../../LanguageContext';
import t from './translation';

function Services(): JSX.Element {
    const navigate = useNavigate();
    const { language } = useContext(LanguageContext);
    function handlePetFriendlyClick(): void {
        navigate('/petFriendly');
    }
    function handleRoomServiceClick(): void {
        navigate('/roomService');
    }
    function handleParkingClick(): void {
        navigate('/parking');
    }
    function handleElectroStationClick(): void {
        navigate('/electroStation');
    }
    function handleLaundryClick(): void {
        navigate('/laundry');
    }
    function handleForChildrenClick(): void {
        navigate('/forChildren');
    }
    return (
        <div className={style.services}>
            <h1 className={style.service_text}>
            {t('services', language)}
            </h1>
            <div className={style.serviceContainerTop}>
                <div className={style.service}>
                    <div className={style.serviceContent} onClick={handlePetFriendlyClick}>
                        <img className={style.icon} src="/icons-hotel-far-away-home/Pet_friendly.png" alt="Pet friendly" />
                        <span className={style.serviceTitle}>{t('petFriendly', language)}</span>
                    </div>
                </div>
                <div className={style.service}>
                    <div className={style.serviceContent} onClick={handleRoomServiceClick}>
                        <img className={style.icon} src="/icons-hotel-far-away-home/Room_service.png" alt="Room service" />
                        <span className={style.serviceTitle}>{t('roomService', language)}</span>
                    </div>
                </div>
                <div className={style.service}>
                    <div className={style.serviceContent} onClick={handleParkingClick}>
                        <img className={style.icon} src="/icons-hotel-far-away-home/Parking.png" alt="Parking" />
                        <span className={style.serviceTitle}>{t('parking', language)}</span>
                    </div>
                </div>
            </div>
            <div className={style.serviceContainerBottom}>
                <div className={style.service}>
                    <div className={style.serviceContent} onClick={handleElectroStationClick}>
                        <img className={style.icon} src="/icons-hotel-far-away-home/Electro-vehicle_charging_station.png" alt="Electro-vehicle charging station" />
                        <span className={style.serviceTitle}>{t('electroStation', language)}</span>
                    </div>
                </div>
                <div className={style.service}>
                    <div className={style.serviceContent} onClick={handleLaundryClick}>
                        <img className={style.icon} src="/icons-hotel-far-away-home/Laundry.png" alt="Laundry" />
                        <span className={style.serviceTitle}>{t('laundry', language)}</span>
                    </div>
                </div>
                <div className={style.service}>
                    <div className={style.serviceContent} onClick={handleForChildrenClick}>
                        <img className={style.icon} src="/icons-hotel-far-away-home/Services_for_children.png" alt="Services for children" />
                        <span className={style.serviceTitle}>{t('servicesForChildren', language)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
