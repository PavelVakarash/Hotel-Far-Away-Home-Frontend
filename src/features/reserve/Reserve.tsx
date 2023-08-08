import React, { useContext, useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import style from './Reserve.module.css';
import { LanguageContext } from '../../LanguageContext';
import t from './translation';
import { useAppDispatch } from '../../store';
import { getAvailableRooms } from '../rooms/roomsSlice';

function Reserve(): JSX.Element {
  const dispatch = useAppDispatch();
  // eslint-disable-next-line @typescript-eslint/naming-convention
   const [cheCkIn, setCheckIn] = useState<string>('');
  // // eslint-disable-next-line @typescript-eslint/naming-convention
   const [checkOut, setCheckOut] = useState<string>('');
 function handleSubmit(event:FormEvent<HTMLFormElement>):void {
  event.preventDefault();
  dispatch(
  getAvailableRooms({ cheCkIn, checkOut })
  );
 }
  const { language } = useContext(LanguageContext);
  return (
    <div className={style.testbox}>
      <div className={style.banner}>
        <h1 className={style.reserve_text}>{t('reservationForm', language)}</h1>
      </div>
      <form className={style.form_cont} onSubmit={handleSubmit}>
        <div className={style.form}>
          <div className={style.top}>
            <div className={style.field}>
              <label htmlFor="checkindate">{t('check-inDate', language)}</label>
              <input
                className={style.input}
                id="checkindate"
                type="date"
                name="checkindate"
                onChange={(event) => setCheckIn(event.target.value)}
              />
            </div>
            <div className={style.field}>
              <label htmlFor="checkindate">{t('check-outDate', language)}</label>
              <input
                className={style.input}
                id="checkoutdate"
                type="date"
                name="checkoutdate"
                onChange={(event) => setCheckOut(event.target.value)}
              />
            </div>
            <div className={style.field}>
              <p>{t('numberOfAdults', language)}</p>
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
              <p>{t('numberOfChildrens', language)}</p>
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
          <Link to="/rooms/available" className={style.reserve}>
          {t('book', language)}
          </Link>
        </div>
      </form>
    </div>
  );
}
export default Reserve;
