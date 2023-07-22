import React, { useContext } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import style from './Reserve.module.css';
import { LanguageContext } from '../../LanguageContext';
import t from './translation';

function Reserve(): JSX.Element {
  const { language } = useContext(LanguageContext);
  return (
    <div className={style.testbox}>
      <div className={style.banner}>
        <h1 className={style.reserve_text}>{t('reservationForm', language)}</h1>
      </div>
      <form className={style.form_cont}>
        <div className={style.form}>
          <div className={style.top}>
            <div className={style.field}>
              <label htmlFor="checkindate">{t('check-inDate', language)}</label>
              <input
                className={style.input}
                id="checkindate"
                type="date"
                name="checkindate"
              />
            </div>
            <div className={style.field}>
              <label htmlFor="checkindate">{t('check-outDate', language)}</label>
              <input
                className={style.input}
                id="checkoutdate"
                type="date"
                name="checkoutdate"
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
          <button className={style.button} type="submit">
          {t('book', language)}
          </button>
        </div>
      </form>
    </div>
  );
}
export default Reserve;
