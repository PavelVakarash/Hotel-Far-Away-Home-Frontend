import React, { FormEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store';
import { createBooking } from '../bookings/bookingsSlice';
import { getRoom } from './roomsSlice';
import { selectRoom } from './selectors';

export default function RoomPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const [flag, setFlag] = useState<boolean>(false);
  const room = useSelector(selectRoom);
  useEffect(() => {
    dispatch(getRoom(Number(id)));
  }, [id, dispatch]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [number, setNumber] = useState<number>(0);
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const [check_in, setCheck_in] = useState<Date>(new Date(2023, 5, 19, 25, 65));
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const [check_out, setCheck_out] = useState<Date>(
    new Date(2023, 5, 19, 25, 65)
  );
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    dispatch(
      createBooking({
        room_id: Number(id),
        check_in,
        check_out,

      })
    );
  }
  return (
    <>
      <div>RoomPage</div>
      <div>
        <span>{room?.number.toString()}</span>
        <span>{room?.price.toString()}</span>
        <span>{room?.typeOfRoom}</span>
        <span>{room?.id}</span>
        <button type="button" onClick={() => setFlag(!flag)}>
          Book
        </button>
        {flag && (
          <form onSubmit={handleSubmit}>
            <input
              type="number"
              placeholder="number"
              onChange={(event) => setNumber(Number(event.target.value))}
            />
            <input
              type="date"
              placeholder="check in"
              onChange={(event) => setCheck_in(new Date(event.target.value))}
            />
            <input
              type="date"
              placeholder="check out"
              onChange={(event) => setCheck_out(new Date(event.target.value))}
            />
            <button type="submit">Отправить</button>
          </form>
        )}
      </div>
    </>
  );
}
