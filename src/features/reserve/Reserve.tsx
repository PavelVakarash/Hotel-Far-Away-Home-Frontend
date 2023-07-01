import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import style from './Reserve.module.css';
import NavBar from '../navbar/NavBar';
import Footer from '../footer/Footer';

function Reserve():JSX.Element {
    return (
    <div className={style.testbox}>
        <NavBar />
        <div className={style.banner}>
        <h1 className={style.reserve_text}>HOTEL RESERVATION FORM</h1>
        </div>
            <form className={style.form_cont}>
            <div className={style.form}>
                <div className={style.top}>
                    <div className={style.field}>
                    <label htmlFor="checkindate">Check-in Date</label>
                        <input id="checkindate" type="date" name="checkindate" />
                    </div>
                    <div className={style.field}>
                    <label htmlFor="checkindate">Check-out Date</label>
                            <input id="checkoutdate" type="date" name="checkoutdate" />

                    </div>
                    <div className={style.field}>
                        <p>Number of adults</p>
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                        </select>
                    </div>
                    <div className={style.field}>
                        <p>Number of childrens</p>
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                        </select>
                    </div>
                    <div className={style.field}>
                        <p>Room type</p>
                        <select className={style.field_room}>
                            <option>Suite</option>
                            <option>Standart</option>
                            <option>Dupplex</option>
                        </select>
                    </div>
                </div>
                <div className={style.details}>
                    <div className={style.item}>
                        <label htmlFor={style.fname}>First Name</label>
                        <input id="fname" type="text" name="fname" />
                    </div>
                    <div className={style.item}>
                        <label htmlFor={style.fname}>Last Name</label>
                        <input id="lname" type="text" name="lname" />
                    </div>
                    <div className={style.item}>
                            <label htmlFor="eaddress">Email Address</label>
                            <input id="eaddress" type="text" name="eaddress" />
                    </div>
                    <div className={style.item}>
                            <label htmlFor="phone">Phone</label>
                            <input id="phone" type="tel" name="phone" />
                    </div>
                </div>
            </div>
                <div className={style.btn_block}>
                    <button type="submit">Search</button>
                </div>
            </form>
            <Footer />
    </div>
    );
}
export default Reserve;
