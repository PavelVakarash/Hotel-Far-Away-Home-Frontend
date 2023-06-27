import React from 'react';
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

function RoomCard(): JSX.Element {
  return (
    <>
      <div className={style.card_container}>
        <div>
          <img className={style.image} src={image1} alt="log" />
        </div>
        <h2 className={style.tytle_room}>Standart with 1 bed</h2>
        <p className={style.text}>
          The spacious rooms feature a living room and a bathroom. There is a
          comfortable working area. An extra bed can be installed on request.
        </p>
        <div className={style.container_with_icons}>
          <div className={style.icon_text}>
            <div className={style.small_icon_text}>
              <img src={room} className={style.svg} alt="room" />
            </div>
            <div>
              <span>1 room</span>
            </div>
          </div>
          <div className={style.icon_text}>
            <div>
              <img src={men} className={style.svg} alt="person" />
            </div>
            <div>
              <span>2 place</span>
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
              <span>1 bed</span>
            </div>
          </div>
        </div>
        <div className={style.button_reserve}>
          <button type="button" className={style.reserve}>
            Reserve
          </button>
        </div>
      </div>
      <div className={style.card_container}>
        <div>
          <img className={style.image} src={image2} alt="log" />
        </div>
        <h2 className={style.tytle_room}>Suite with 2 beds</h2>
        <p className={style.text}>
          The spacious rooms feature a living room and a bathroom. There is a
          comfortable working area. An extra bed can be installed on request.
        </p>
        <div className={style.container_with_icons}>
          <div className={style.icon_text}>
            <div>
              <img src={room} className={style.svg} alt="room" />
            </div>
            <div>
              <span>1 room</span>
            </div>
          </div>
          <div className={style.icon_text}>
            <div>
              <img src={men} className={style.svg} alt="person" />
            </div>
            <div>
              <span>2 place</span>
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
              <span>2 beds</span>
            </div>
          </div>
        </div>
        <div className={style.button_reserve}>
          <button type="button" className={style.reserve}>
            Reserve
          </button>
        </div>
      </div>
      <div className={style.card_container}>
        <div>
          <img className={style.image} src={image3} alt="log" />
        </div>
        <h2 className={style.tytle_room}>Suit</h2>
        <p className={style.text}>
          A room with panoramic views from the bedroom and bathroom to the city
          center, ideal for a romantic getaway.
        </p>
        <div className={style.container_with_icons}>
          <div className={style.icon_text}>
            <div>
              <img src={room} className={style.svg} alt="room" />
            </div>
            <div>
              <span>1 room</span>
            </div>
          </div>
          <div className={style.icon_text}>
            <div>
              <img src={men} className={style.svg} alt="person" />
            </div>
            <div>
              <span>2 places</span>
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
              <span>1 bed</span>
            </div>
          </div>
        </div>
        <div className={style.button_reserve}>
          <button type="button" className={style.reserve}>
            Reserve
          </button>
        </div>
      </div>
      <div className={style.card_container}>
        <div>
          <img className={style.image} src={halflux} alt="log" />
        </div>
        <h2 className={style.tytle_room}>Duplex</h2>
        <p className={style.text}>
          The room has a combined bedroom and a living area, a dining space and
          a full kitchen with the necessary household appliances and dishes (on
          request). An additional sleeping place is represented by a folding
          sofa.
        </p>
        <div className={style.container_with_icons}>
          <div className={style.icon_text}>
            <div>
              <img src={room} className={style.svg} alt="room" />
            </div>
            <div>
              <span>2 rooms</span>
            </div>
          </div>
          <div className={style.icon_text}>
            <div>
              <img src={men} className={style.svg} alt="person" />
            </div>
            <div>
              <span>4 places</span>
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
              <span>1 bed and 1 sofa</span>
            </div>
          </div>
        </div>
        <div className={style.button_reserve}>
          <button type="button" className={style.reserve}>
            Reserve
          </button>
        </div>
      </div>
      <div className={style.card_container}>
        <div>
          <img className={style.image} src={threeBeds} alt="log" />
        </div>
        <h2 className={style.tytle_room}>Standart</h2>
        <p className={style.text}>
          The apartments are ideal for families with children or large groups of
          travelers. The room has 2 separate bedrooms, a living area, a dining
          space, a fully equipped kitchen with necessary household appliances
          and dishes (on request), as well as a dressing room. The bathroom is
          equipped with a shower or a bathtub and a shower.
        </p>
        <div className={style.container_with_icons}>
          <div className={style.icon_text}>
            <div>
              <img src={room} className={style.svg} alt="room" />
            </div>
            <div>
              <span>2 rooms</span>
            </div>
          </div>
          <div className={style.icon_text}>
            <div>
              <img src={men} className={style.svg} alt="person" />
            </div>
            <div>
              <span>4 places</span>
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
              <span>3 beds</span>
            </div>
          </div>
        </div>
        <div className={style.button_reserve}>
          <button type="button" className={style.reserve}>
            Reserve
          </button>
        </div>
      </div>
      <div className={style.card_container}>
        <div>
          <img className={style.image} src={modern} alt="log" />
        </div>
        <h2 className={style.tytle_room}>Duplex</h2>
        <p className={style.text}>
          The spacious rooms feature a living room and a bathroom. There is a
          comfortable working area. An extra bed can be installed on request.
        </p>
        <div className={style.container_with_icons}>
          <div className={style.icon_text}>
            <div>
              <img src={room} className={style.svg} alt="room" />
            </div>
            <div>
              <span>2 rooms</span>
            </div>
          </div>
          <div className={style.icon_text}>
            <div>
              <img src={men} className={style.svg} alt="person" />
            </div>
            <div>
              <span>2 places</span>
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
              <span>1 bed</span>
            </div>
          </div>
        </div>
        <div className={style.button_reserve}>
          <button type="button" className={style.reserve}>
            Reserve
          </button>
        </div>
      </div>
    </>
  );
}
export default RoomCard;
