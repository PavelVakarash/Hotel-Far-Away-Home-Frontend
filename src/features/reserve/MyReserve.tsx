import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store';
import { loadMyBookings } from '../bookings/bookingsSlice';
import { selectMyBookings } from '../bookings/selectors';

export default function MyReserve(): JSX.Element {
  const dispatch = useAppDispatch();
  const bookings = useSelector(selectMyBookings);
  useEffect(() => {
    dispatch(loadMyBookings());
  }, [dispatch]);
  return (
    <>
      <div>My bookings</div>
      <div>
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
