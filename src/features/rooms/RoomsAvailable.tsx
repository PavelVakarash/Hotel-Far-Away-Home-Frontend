import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store';
import { getAvailableRooms } from './roomsSlice';
import { selectAvailableRooms, selectcheCkIn, selectcheckOut } from './selectors';
import style from './Rooms.module.css';

export default function RoomsAvailable():JSX.Element {
    const dispatch = useAppDispatch();
    const rooms = useSelector(selectAvailableRooms);
    const cheCkIn = useSelector(selectcheCkIn);
    const checkOut = useSelector(selectcheckOut);

    useEffect(() => {
        dispatch(getAvailableRooms({ cheCkIn, checkOut }));
    }, [cheCkIn, checkOut, dispatch]);
    return (
        <div className={style.rooms_cont}>
                {rooms && rooms.map((el) => (
                    <div className={style.room_card} key={el.id}>
                        №{el.number}
                        <p>{el.typeOfRoom}</p>
                        <p>{el.price}</p>
                        <Link className={style.link} to={el.id.toString()}>About room</Link>
                    </div>
                ))}
        </div>
    );
}
