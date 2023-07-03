import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import style from './Reserve.module.css';

function Reserve(): JSX.Element {
  return (
    <div className={style.testbox}>
      <div className={style.banner}>
        <h1 className={style.reserve_text}>HOTEL RESERVATION FORM</h1>
      </div>
      <form className={style.form_cont}>
        <div className={style.form}>
          <div className={style.top}>
            <div className={style.field}>
              <label htmlFor="checkindate">Check-in Date</label>
              <input
                className={style.input}
                id="checkindate"
                type="date"
                name="checkindate"
              />
            </div>
            <div className={style.field}>
              <label htmlFor="checkindate">Check-out Date</label>
              <input
                className={style.input}
                id="checkoutdate"
                type="date"
                name="checkoutdate"
              />
            </div>
            <div className={style.field}>
              <p>Number of adults</p>
              <select className={style.select}>
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
              <select className={style.select}>
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
          </div>
        </div>
        <div className={style.btn_block}>
          <button className={style.button} type="submit">
            Book
          </button>
        </div>
      </form>
    </div>
  );
}
export default Reserve;
