import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useParams } from 'react-router-dom';
import { useAppDispatch } from '../../store';
import { deleteRoom, loadRooms } from './roomsSlice';
import { selectRooms } from './selectors';

export default function Rooms(): JSX.Element {
  const rooms = useSelector(selectRooms);
  const dispatch = useAppDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(loadRooms());
  }, [dispatch]);
  return id ? <Outlet /> : (
    <div>
      <div>Rooms</div>
      {rooms.map((el) => (
        <div key={el.id}>
          {el.number}
          <p>{el.type_of_room}</p>
          <p>{el.price}</p>
          <button
            type="button"
            onClick={() => dispatch(deleteRoom(el.id))}
          >
            Delete room
          </button>
        </div>
      ))}
    </div>
  );
}
