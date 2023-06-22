import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from './MenuBar.module.css';

function MenuBar(): JSX.Element {
    const navigate = useNavigate();
    function handleReserveClick(): void {
        navigate('/reserve');
    }
    function handleEventsClick(): void {
        navigate('/events');
    }
    function handleContactsClick(): void {
        navigate('/contacts');
    }
    function handlePhoneClick(): void {
        navigate('/phone');
    }
    function handleOverviewClick(): void {
        navigate('/overview');
    }
    function handleRequestCallClick(): void {
        navigate('/requestCall');
    }
    function handleRuClick(): void {
        navigate('/ru');
    }
    function handleDeClick(): void {
        navigate('/de');
    }
    function handleEnClick(): void {
        navigate('/en');
    }

    const handleScrollToBottom = (): void => {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
          });
        };

    return (
        <div className={style.menuBar}>
            <div className={style.logoContainer}>
                <img src="/logo-hotel-far-away-home/hotel-far-away-home.png" alt="Logo" className={style.logo} />
            </div>
            <span className={style.menu_text} onClick={handleReserveClick}>Reserve</span>
            <span className={style.menu_text} onClick={handleOverviewClick}>Overview</span>
            <span className={style.menu_text} onClick={handleEventsClick}>Events</span>
            <span className={style.menu_text} onClick={handleContactsClick}>Contacts</span>
            <span className={style.menu_text} onClick={handlePhoneClick}>+0 123 456 78 90</span>
            <span className={style.menu_text} onClick={handleRequestCallClick}>Request Call</span>
            <span className={style.menu_text} onClick={handleDeClick}>
            <img src="/icons-hotel-far-away-home/germany.png" alt="DE" className={style.icon} />
            DE
            </span>
            <span className={style.menu_text} onClick={handleRuClick}>
            <img src="/icons-hotel-far-away-home/russia.png" alt="RU" className={style.icon} />
            RU
            </span>
            <span className={style.menu_text} onClick={handleEnClick}>
            <img src="/icons-hotel-far-away-home/united-kingdom.png" alt="EN" className={style.icon} />
            EN
            </span>
            <span className={style.menu_text} onClick={handleScrollToBottom}>{'\u2193'}</span>
        </div>
    );
}

export default MenuBar;
