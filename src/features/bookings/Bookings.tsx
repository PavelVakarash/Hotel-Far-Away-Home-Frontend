import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectBookings } from './selectors';
import { loadBookings, deleteBooking } from './bookingsSlice';
import { useAppDispatch } from '../../store';

export default function Bookings(): JSX.Element {
  const bookings = useSelector(selectBookings);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadBookings());
  }, [dispatch]);
  return (
    <>
      <div>Bookings</div>
      <div>
        {bookings.map((el) => (
          <div key={el.id}>
            {el.room_id}
            <p>{el.check_in.getDate()}</p>
            <button
              type="button"
              onClick={() => dispatch(deleteBooking(el.id))}
            >
              Delete booking
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
