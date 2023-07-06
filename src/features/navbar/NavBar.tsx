import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import style from './NavBar.module.css';
import { selectUser } from '../auth/selectors';
import { logout } from '../auth/authSlice';
import { useAppDispatch } from '../../store';

function NavBar(): JSX.Element {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  function handleLogoClick(): void {
    navigate('/');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  const dispatch = useAppDispatch();
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

  return (
    <div className={style.navBar}>
      <div className={style.logoContainer} onClick={handleLogoClick}>
        <img
          src="/logo-hotel-far-away-home/hotel-far-away-home.png"
          alt="Logo"
          className={style.logo}
        />
      </div>
      <NavLink className={style.navBar_text} to="/reserve">
        Reserve
      </NavLink>
      <NavLink className={style.navBar_text} to="/overview">
        Overview
      </NavLink>
      {user && user.role === 'ADMIN' && (
        <NavLink className={style.navBar_text} to="/rooms/create">
          Create room
        </NavLink>
      )}
      <NavLink className={style.navBar_text} to="/rooms">
        Rooms
      </NavLink>
      <NavLink className={style.navBar_text} to="/events">
        Events
      </NavLink>
      {!user ? (
        <NavLink className={style.navBar_text} to="/auth/login">
          Login
        </NavLink>
      ) : (
        <><NavLink className={style.navBar_text} onClick={handleLogout} to="#">
            Logout
          </NavLink><NavLink className={style.navBar_text} to="/my-reserve">
              My reserve
                    </NavLink>
        </>
      )}
      <NavLink className={style.navBar_text} to="/contacts">
        Contacts
      </NavLink>
      <NavLink className={style.navBar_text} to="/">
        +0 123 456 78 90
      </NavLink>
      <NavLink className={style.navBar_text} to="/">
        Request a Call
      </NavLink>
      <NavLink className={style.navBar_text} to="/">
        <img
          src="/icons-hotel-far-away-home/germany.png"
          alt="DE"
          className={style.icon}
        />
        DE
      </NavLink>
      <NavLink className={style.navBar_text} to="/">
        <img
          src="/icons-hotel-far-away-home/russia.png"
          alt="RU"
          className={style.icon}
        />
        RU
      </NavLink>
      <NavLink className={style.navBar_text} to="/">
        <img
          src="/icons-hotel-far-away-home/united-kingdom.png"
          alt="EN"
          className={style.icon}
        />
        EN
      </NavLink>
      <NavLink className={style.navBar_text} onClick={handleScrollToDown} to="/">
      {'\u2193'}
      </NavLink>
    </div>
  );
}
export default NavBar;
