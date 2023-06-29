import React from 'react';
import style from './Overview.module.css';
import RoomCard from './room-card/RoomCard';
import Services from '../services/Services';
import NavBar from '../navbar/NavBar';
import Footer from '../footer/Footer';

function Overview():JSX.Element {
    return (
        <div className={style.container}>
            <NavBar />
            <h1 className={style.tytle}>OUR ROOMS AND SERVICES</h1>
            <div className={style.cards}>
                <RoomCard />
            </div>
            <Services />
            <Footer />
        </div>
    );
}
export default Overview;
