import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import style from './RoomCard.module.css';
import image1 from './small-hotel-room.jpg';
import image2 from './double-bed.jpg';
import image3 from './high-angle.jpg';
import halflux from './halflux.jpg';
import modern from './modern.jpg';
import threeBeds from './three-beds.jpg';
import room from './sq.png';
import men from './men.png';
import bed from './bed1.png';
import sq from './frame.png';
import { LanguageContext } from '../../../LanguageContext';
import t from '../translation';

function RoomCard(): JSX.Element {
const { language } = useContext(LanguageContext);

  return (
    <>
      <div className={style.card_container}>
        <div>
          <img className={style.image} src={image1} alt="log" />
        </div>
        <h2 className={style.tytle_room}>{t('standart1bed', language)}</h2>
        <p className={style.text}>
        {t('standart1bedText', language)}
        </p>
        <div className={style.container_with_icons}>
          <div className={style.icon_text}>
            <div className={style.small_icon_text}>
              <img src={room} className={style.svg} alt="room" />
            </div>
            <div>
              <span>{t('1room', language)}</span>
            </div>
          </div>
          <div className={style.icon_text}>
            <div>
              <img src={men} className={style.svg} alt="person" />
            </div>
            <div>
              <span>{t('2places', language)}</span>
            </div>
          </div>
          <div className={style.icon_text}>
            <div className={style.svg}>
              <img src={sq} className={style.svg} alt="sqr" />
            </div>
            <div>
              <span>30 m2</span>
            </div>
          </div>
          <div className={style.icon_text}>
            <div className={style.svg}>
              <img src={bed} className={style.svg} alt="bed" />
            </div>
            <div>
              <span>{t('1bed', language)}</span>
            </div>
          </div>
        </div>
        <div className={style.button_reserve}>
          <Link to="/rooms" className={style.reserve}>
          {t('reserve', language)}
          </Link>
        </div>
      </div>
      <div className={style.card_container}>
        <div>
          <img className={style.image} src={image2} alt="log" />
        </div>
        <h2 className={style.tytle_room}>{t('suite2beds', language)}</h2>
        <p className={style.text}>
        {t('suite2bedsText', language)}
        </p>
        <div className={style.container_with_icons}>
          <div className={style.icon_text}>
            <div>
              <img src={room} className={style.svg} alt="room" />
            </div>
            <div>
              <span>{t('1room', language)}</span>
            </div>
          </div>
          <div className={style.icon_text}>
            <div>
              <img src={men} className={style.svg} alt="person" />
            </div>
            <div>
              <span>{t('2places', language)}</span>
            </div>
          </div>
          <div className={style.icon_text}>
            <div>
              <img src={sq} className={style.svg} alt="sqr" />
            </div>
            <div>
              <span>30 m2</span>
            </div>
          </div>
          <div className={style.icon_text}>
            <div>
              <img src={bed} className={style.svg} alt="bed" />
            </div>
            <div>
              <span>{t('2beds', language)}</span>
            </div>
          </div>
        </div>
        <div className={style.button_reserve}>
        <Link to="/rooms" className={style.reserve}>
        {t('reserve', language)}
        </Link>
        </div>
      </div>
      <div className={style.card_container}>
        <div>
          <img className={style.image} src={image3} alt="log" />
        </div>
        <h2 className={style.tytle_room}>{t('suite', language)}</h2>
        <p className={style.text}>
        {t('suiteText', language)}
        </p>
        <div className={style.container_with_icons}>
          <div className={style.icon_text}>
            <div>
              <img src={room} className={style.svg} alt="room" />
            </div>
            <div>
              <span>{t('1room', language)}</span>
            </div>
          </div>
          <div className={style.icon_text}>
            <div>
              <img src={men} className={style.svg} alt="person" />
            </div>
            <div>
              <span>{t('2places', language)}</span>
            </div>
          </div>
          <div className={style.icon_text}>
            <div>
              <img src={sq} className={style.svg} alt="sqr" />
            </div>
            <div>
              <span>30 m2</span>
            </div>
          </div>
          <div className={style.icon_text}>
            <div>
              <img src={bed} className={style.svg} alt="bed" />
            </div>
            <div>
              <span>{t('1bed', language)}</span>
            </div>
          </div>
        </div>
        <div className={style.button_reserve}>
        <Link to="/rooms" className={style.reserve}>
        {t('reserve', language)}
        </Link>
        </div>
      </div>
      <div className={style.card_container}>
        <div>
          <img className={style.image} src={halflux} alt="log" />
        </div>
        <h2 className={style.tytle_room}>{t('duplex', language)}</h2>
        <p className={style.text}>
        {t('duplexText', language)}
        </p>
        <div className={style.container_with_icons}>
          <div className={style.icon_text}>
            <div>
              <img src={room} className={style.svg} alt="room" />
            </div>
            <div>
              <span>{t('2rooms', language)}</span>
            </div>
          </div>
          <div className={style.icon_text}>
            <div>
              <img src={men} className={style.svg} alt="person" />
            </div>
            <div>
              <span>{t('4places', language)}</span>
            </div>
          </div>
          <div className={style.icon_text}>
            <div>
              <img src={sq} className={style.svg} alt="sqr" />
            </div>
            <div>
              <span>45 m2</span>
            </div>
          </div>
          <div className={style.icon_text}>
            <div>
              <img src={bed} className={style.svg} alt="bed" />
            </div>
            <div>
              <span>{t('1bed1sofa', language)}</span>
            </div>
          </div>
        </div>
        <div className={style.button_reserve}>
        <Link to="/rooms" className={style.reserve}>
        {t('reserve', language)}
        </Link>
        </div>
      </div>
      <div className={style.card_container}>
        <div>
          <img className={style.image} src={threeBeds} alt="log" />
        </div>
        <h2 className={style.tytle_room}>{t('standart', language)}</h2>
        <p className={style.text}>
        {t('standartText', language)}
        </p>
        <div className={style.container_with_icons}>
          <div className={style.icon_text}>
            <div>
              <img src={room} className={style.svg} alt="room" />
            </div>
            <div>
              <span>{t('2rooms', language)}</span>
            </div>
          </div>
          <div className={style.icon_text}>
            <div>
              <img src={men} className={style.svg} alt="person" />
            </div>
            <div>
              <span>{t('4places', language)}</span>
            </div>
          </div>
          <div className={style.icon_text}>
            <div>
              <img src={sq} className={style.svg} alt="sqr" />
            </div>
            <div>
              <span>40 m2</span>
            </div>
          </div>
          <div className={style.icon_text}>
            <div>
              <img src={bed} className={style.svg} alt="bed" />
            </div>
            <div>
              <span>{t('3beds', language)}</span>
            </div>
          </div>
        </div>
        <div className={style.button_reserve}>
        <Link to="/rooms" className={style.reserve}>
        {t('reserve', language)}
        </Link>
        </div>
      </div>
      <div className={style.card_container}>
        <div>
          <img className={style.image} src={modern} alt="log" />
        </div>
        <h2 className={style.tytle_room}>{t('duplex', language)}</h2>
        <p className={style.text}>
        {t('duplexText2', language)}
        </p>
        <div className={style.container_with_icons}>
          <div className={style.icon_text}>
            <div>
              <img src={room} className={style.svg} alt="room" />
            </div>
            <div>
              <span>{t('2rooms', language)}</span>
            </div>
          </div>
          <div className={style.icon_text}>
            <div>
              <img src={men} className={style.svg} alt="person" />
            </div>
            <div>
              <span>{t('2places', language)}</span>
            </div>
          </div>
          <div className={style.icon_text}>
            <div>
              <img src={sq} className={style.svg} alt="sqr" />
            </div>
            <div>
              <span>40 m2</span>
            </div>
          </div>
          <div className={style.icon_text}>
            <div>
              <img src={bed} className={style.svg} alt="bed" />
            </div>
            <div>
              <span>{t('1bed', language)}</span>
            </div>
          </div>
        </div>
        <div className={style.button_reserve}>
        <Link to="/rooms" className={style.reserve}>
        {t('reserve', language)}
        </Link>
        </div>
      </div>
    </>
  );
}
export default RoomCard;
