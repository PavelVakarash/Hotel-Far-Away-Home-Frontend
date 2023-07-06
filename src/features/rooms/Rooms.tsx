import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet, useParams } from 'react-router-dom';
import { useAppDispatch } from '../../store';
import { deleteRoom, loadRooms } from './roomsSlice';
import { selectRooms } from './selectors';
import { selectUser } from '../auth/selectors';
import style from './Rooms.module.css';

export default function Rooms(): JSX.Element {
  const rooms = useSelector(selectRooms);
  const dispatch = useAppDispatch();
  const user = useSelector(selectUser);
  const { id } = useParams();
  useEffect(() => {
    dispatch(loadRooms());
  }, [dispatch]);
  return id ? (
    <Outlet />
  ) : (
    <div className={style.rooms_cont}>
      {rooms &&
        rooms.map((el) => (
          <div className={style.room_card} key={el.id}>
            {el.number}
            <p>{el.typeOfRoom}</p>
            <p>{el.price}</p>
            {user && user.role === 'ADMIN' && (
              <button type="button" onClick={() => dispatch(deleteRoom(el.id))}>
                Delete room
              </button>
            )}
             <Link className={style.link} to={el.id.toString()}>About room</Link>
          </div>
        ))}
    </div>
  );
}
