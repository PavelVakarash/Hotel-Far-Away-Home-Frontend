import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import style from './NavBar.module.css';
import { selectUser } from '../auth/selectors';
import { logout } from '../auth/authSlice';
import { useAppDispatch } from '../../store';
import { LanguageContext } from '../../LanguageContext';
import t from './translation';

function NavBar(): JSX.Element {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const dispatch = useAppDispatch();
  const { language, changeLanguage } = useContext(LanguageContext);
  const logoPath = t('logo', language);

  function handleLogoClick(): void {
    navigate('/');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  const handleLogout = React.useCallback(
    async (event: React.MouseEvent) => {
      event.preventDefault();
      const dispatchResult = await dispatch(logout());
      if (logout.fulfilled.match(dispatchResult)) {
        navigate('/auth/login');
      }
    },
    [dispatch, navigate]
  );

  const handleScrollToDown = (): void => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  const handleLanguageChange = (lang: string): void => {
    changeLanguage(lang);
  };

  return (
    <div className={style.navBar}>
      <div className={style.logoContainer} onClick={handleLogoClick}>
        <img
          src={logoPath}
          alt="Logo"
          className={style.logo}
        />
      </div>
      <div className={style.navBar_block}>
        <NavLink className={style.navBar_text} to="/reserve">
          {t('reserve', language)}
        </NavLink>
        <NavLink className={style.navBar_text} to="/overview">
          {t('overview', language)}
        </NavLink>
        {user && user.role === 'ADMIN' && (
          <NavLink className={style.navBar_text} to="/rooms/create">
            {t('createRoom', language)}
          </NavLink>
        )}
        <NavLink className={style.navBar_text} to="/rooms">
          {t('rooms', language)}
        </NavLink>
        <NavLink className={style.navBar_text} to="/events">
          {t('events', language)}
        </NavLink>
        {!user ? (
          <NavLink className={style.navBar_text} to="/auth/login">
            {t('login', language)}
          </NavLink>
        ) : (
          <>
            <NavLink className={style.navBar_text} onClick={handleLogout} to="#">
              {t('logout', language)}
            </NavLink>
            <NavLink className={style.navBar_text} to="/my-reserve">
              {t('myReserve', language)}
            </NavLink>
          </>
        )}
        <NavLink className={style.navBar_text} to="/contacts">
          {t('contacts', language)}
        </NavLink>
      </div>
      <div className={style.navBar_block}>
        <NavLink className={style.navBar_text} to="/">
          +0 123 456 78 90
        </NavLink>
        <NavLink className={style.navBar_text} to="/">
          {t('requestCall', language)}
        </NavLink>
        <span className={style.navBar_text} onClick={() => handleLanguageChange('de')}>
          <img
            src="/icons-hotel-far-away-home/germany.png"
            alt="DE"
            className={style.icon}
          />
          DE
        </span>
        <span className={style.navBar_text} onClick={() => handleLanguageChange('ru')}>
          <img
            src="/icons-hotel-far-away-home/russia.png"
            alt="RU"
            className={style.icon}
          />
          RU
        </span>
        <span className={style.navBar_text} onClick={() => handleLanguageChange('en')}>
          <img
            src="/icons-hotel-far-away-home/united-kingdom.png"
            alt="EN"
            className={style.icon}
          />
          EN
        </span>
        <span className={style.navBar_text} onClick={handleScrollToDown}>
          {'\u2193'}
        </span>
      </div>
    </div>
  );
}
export default NavBar;
