import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Footer.module.css';

function Footer(): JSX.Element {
    const navigate = useNavigate();
    function handleLogoClick(): void {
        navigate('/');
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
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

    const handleScrollToTop = (): void => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className={style.footer}>
            <div className={style.logoContainer} onClick={handleLogoClick}>
                <img src="/logo-hotel-far-away-home/hotel-far-away-home.png" alt="Logo" className={style.logo} />
            </div>
            <div className={style.footer_menu}>
                <div className={style.menu}>
                    <div className={style.mainMenu}>
                        <span className={style.footer_text} onClick={handleReserveClick}>Reserve
                        </span>
                        <span className={style.footer_text} onClick={handleOverviewClick}>Overview
                        </span>
                        <span className={style.footer_text} onClick={handleEventsClick}>Events
                        </span>
                        <span className={style.footer_text} onClick={handleContactsClick}>Contacts
                        </span>
                    </div>
                    <div className={style.callMenu}>
                        <span className={style.footer_text} onClick={handlePhoneClick}>
                            +0 123 456 78 90
                        </span>
                        <span className={style.footer_text} onClick={handleRequestCallClick}>
                            Request a Call
                        </span>
                    </div>
                </div>
                <div className={style.info}>
                <div className={style.mainInfo}>
                    <span className={style.info_text}>
                        © Far Away Home Hotel 2023
                    </span>
                    <span className={style.footer_text} onClick={handleDeClick}>
                        <img src="/icons-hotel-far-away-home/germany.png" alt="DE" className={style.icon} />
                        DE
                    </span>
                    <span className={style.footer_text} onClick={handleRuClick}>
                        <img src="/icons-hotel-far-away-home/russia.png" alt="RU" className={style.icon} />
                        RU
                    </span>
                    <span className={style.footer_text} onClick={handleEnClick}>
                        <img src="/icons-hotel-far-away-home/united-kingdom.png" alt="EN" className={style.icon} />
                        EN
                    </span>
                </div>
                    <div className={style.socialInfo}>
                    <span className={style.info_text}>
                        Social networks
                    </span>
                    <img src="/icons-hotel-far-away-home/telegram.png" alt="EN" className={style.socialIcon} />
                    <img src="/icons-hotel-far-away-home/youtube.png" alt="EN" className={style.socialIcon} />
                    <img src="/icons-hotel-far-away-home/vk.png" alt="EN" className={style.socialIcon} />
                    <img src="/icons-hotel-far-away-home/twitter.png" alt="EN" className={style.socialIcon} />
                    <img src="/icons-hotel-far-away-home/whatsapp.png" alt="EN" className={style.socialIcon} />
                    <img src="/icons-hotel-far-away-home/pinterest.png" alt="EN" className={style.socialIcon} />
                    <span className={style.scrollToTop} onClick={handleScrollToTop}>
                    <img src="/icons-hotel-far-away-home/up.png" alt="EN" className={style.scrollToTop} />
                    </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
