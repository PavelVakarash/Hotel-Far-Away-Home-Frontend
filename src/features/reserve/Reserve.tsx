import React from 'react';
import style from './Reserve.module.css';

function Reserve():JSX.Element {
    return (
    <div className={style.testbox}>
        <form>
            <div className={style.banner}>
            <h1>Hotel Reservation Form</h1>
            </div>
        </form>
    </div>
    );
}
export default Reserve;
