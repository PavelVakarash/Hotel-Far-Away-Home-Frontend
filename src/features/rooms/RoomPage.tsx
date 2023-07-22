import React, { FormEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store';
import { createBooking } from '../bookings/bookingsSlice';
import { getRoom } from './roomsSlice';
import { selectRoom } from './selectors';
import { selectUser } from '../auth/selectors';
import style from './RoomPage.module.css';

export default function RoomPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const [flag, setFlag] = useState<boolean>(false);
  const room = useSelector(selectRoom);
  const currentUser = useSelector(selectUser);
  useEffect(() => {
    dispatch(getRoom(Number(id)));
  }, [id, dispatch]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [number, setNumber] = useState<number>(0);
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const [cheCkIn, setCheck_in] = useState<Date>(new Date(2023, 5, 19, 25, 65));
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const [checkOut, setCheck_out] = useState<Date>(
    new Date(2023, 5, 19, 25, 65)
  );
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    dispatch(
      createBooking({
        roomIds: [Number(id)],
        cheCkIn,
        checkOut,
        userId: currentUser?.id || 0,
      })
    );
  }
  return (
    <div className={style.page_cont}>
      <span className={style.check}>Please check your booking: </span>
        <span>№{room?.number.toString()}</span>
        <span>{room?.price.toString()}</span>
        <span>{room?.typeOfRoom}</span>
        <span>{room?.id}</span>
        <button className={style.book} type="button" onClick={() => setFlag(!flag)}>
          Book
        </button>
        {flag && (
          <form className={style.form} onSubmit={handleSubmit}>
            <input
              className={style.input}
              type="date"
              placeholder="check in"
              onChange={(event) => setCheck_in(new Date(event.target.value))}
            />
            <input
              className={style.input}
              type="date"
              placeholder="check out"
              onChange={(event) => setCheck_out(new Date(event.target.value))}
            />
            <button className={style.book} type="submit">Отправить</button>
          </form>
        )}
    </div>
  );
}
