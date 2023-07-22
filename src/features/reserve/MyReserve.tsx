import React, { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store';
import { loadMyBookings } from '../bookings/bookingsSlice';
import { selectMyBookings } from '../bookings/selectors';
import { LanguageContext } from '../../LanguageContext';
import t from './translation';
import style from './MyReserve.module.css';

export default function MyReserve(): JSX.Element {
  const dispatch = useAppDispatch();
  const bookings = useSelector(selectMyBookings);
  useEffect(() => {
    dispatch(loadMyBookings());
  }, [dispatch]);
  const { language } = useContext(LanguageContext);
  return (
    <>
      <div>{t('myBookings', language)}</div>
      <div>
      <div className={style.cont}>
          <div className={style.my_book}>MY BOOKINGS</div>
          <div className={style.card_cont}>
            {bookings &&
              bookings.map((booking) => (
                <div className={style.card} key={booking.id}>
                  <div>№{booking.roomIds[0]}</div>
                  <div>{booking.checkIn}</div>
                  <div>{booking.checkOut}</div>
                </div>
              ))}
          </div>
      </div>
        {bookings && bookings.map((booking) => (
          <>
            <div>{booking.roomIds[0]}</div>
            <div>{booking.cheCkIn}</div>
            <div>{booking.checkOut}</div>
          </>
        ))}
      </div>
    </>
  );
}
