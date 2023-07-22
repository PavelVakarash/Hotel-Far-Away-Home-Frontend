import React, { useContext } from 'react';
import style from './Overview.module.css';
import RoomCard from './room-card/RoomCard';
import Services from '../services/Services';
import { LanguageContext } from '../../LanguageContext';
import t from './translation';

function Overview(): JSX.Element {
const { language } = useContext(LanguageContext);

  return (
    <div className={style.container}>
      <h1 className={style.tytle}>{t('ourRoomsServices', language)}</h1>
      <div className={style.cards}>
        <RoomCard />
      </div>
      <Services />
    </div>
  );
}
export default Overview;
