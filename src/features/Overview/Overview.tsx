import React from 'react';
import style from './Overview.module.css';
import RoomCard from './room-card/RoomCard';
import Services from '../services/Services';

function Overview():JSX.Element {
    return (
        <div className={style.container}>
            <h1 className={style.tytle}>OUR ROOMS AND SERVICES</h1>
            <div className={style.cards}>
                <RoomCard />
            </div>
        </div>
    );
}
export default Overview;
