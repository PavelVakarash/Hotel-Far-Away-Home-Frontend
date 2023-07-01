import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Header.module.css';

function Header(): JSX.Element {
    const navigate = useNavigate();
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
                Luxury Accommodations at Far Away Home: Your Home Away from Home
            </h1>
            <div className={style.header_buttonContainer}>
                <button className={style.header_button} type="button" onClick={handleCheckInClick}>Check-in
                    <img className={style.icon} src="/icons-hotel-far-away-home/calendar.png" alt="Check-in" />
                </button>
                <button className={style.header_button} type="button" onClick={handleCheckOutClick}>Check-out
                    <img className={style.icon} src="/icons-hotel-far-away-home/calendar.png" alt="Check-out" />
                </button>
                <button className={style.header_button} type="button" onClick={handleGuestsClick}>Guests
                    <img className={style.icon} src="/icons-hotel-far-away-home/stick-man.png" alt="Guests" />
                </button>
                <button className={style.header_button_reserve} type="button" onClick={handleReserveRoomClick}>Reserve Room
                </button>
            </div>
        </div>
    );
}

export default Header;
