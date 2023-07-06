import React, { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store';
import { createRoom } from './roomsSlice';
import style from './CreateRoom.module.css';

export default function CreateRoom(): JSX.Element {
  const [number] = React.useState(0);
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const [typeOfRoom, setRoom] = React.useState('standart');
  const [price, setPrice] = React.useState(0);
  const dispatch = useAppDispatch();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const navigate = useNavigate();
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    dispatch(createRoom({ number, typeOfRoom: typeOfRoom.toUpperCase(), price }));
   // navigate('/rooms');
  }
  return (
      <form onSubmit={handleSubmit} className={style.create_cont}>
        <select className={style.select} name="type" onChange={(event) => setRoom(event.target.value)}>
          <option value="STANDART" selected>Standart</option>
          <option value="DUPLEX">Duplex</option>
          <option value="SUITE">Suite</option>
        </select>
        <input
          className={style.input}
          type="text"
          onChange={(event) => setPrice(Number(event.target.value))}
          placeholder="price"
        />
        <button className={style.submit} type="submit">Create room</button>
      </form>

  );
}
