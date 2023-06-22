import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store';
import style from './HomePage.module.css';
import MenuBar from './MenuBar';

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
    return (
        <div className={style.header}>
            <MenuBar />
            <h1 className={style.header_text}>Luxury Accommodations at Far Away Home: Your Home Away from Home
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
        </div>
        </div>
    );
}

export default Header;
