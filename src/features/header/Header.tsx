import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Header.module.css';
import { LanguageContext } from '../../LanguageContext';
import t from './translation';

function Header(): JSX.Element {
    const navigate = useNavigate();

    const { language } = useContext(LanguageContext);
    function handleCheckInClick(): void {
        navigate('/check-in');
    }
    function handleCheckOutClick(): void {
        navigate('/check-out');
    }
    function handleGuestsClick(): void {
        navigate('/guests');
    }
    function handleReserveRoomClick(): void {
        navigate('/guests');
    }

    return (
        <div className={style.header}>
            <h1 className={style.header_text}>
            {t('accommodations', language)}
            </h1>
            <div className={style.header_buttonContainer}>
                <button className={style.header_button} type="button" onClick={handleCheckInClick}>{t('check-in', language)}
                    <img className={style.icon} src="/icons-hotel-far-away-home/calendar.png" alt="Check-in" />
                </button>
                <button className={style.header_button} type="button" onClick={handleCheckOutClick}>{t('check-out', language)}
                    <img className={style.icon} src="/icons-hotel-far-away-home/calendar.png" alt="Check-out" />
                </button>
                <button className={style.header_button} type="button" onClick={handleGuestsClick}>{t('guests', language)}
                    <img className={style.icon} src="/icons-hotel-far-away-home/stick-man.png" alt="Guests" />
                </button>
                <button className={style.header_button_reserve} type="button" onClick={handleReserveRoomClick}>{t('reserveRoom', language)}
                </button>
            </div>
        </div>
    );
}

export default Header;
