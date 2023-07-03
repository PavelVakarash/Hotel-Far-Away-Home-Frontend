import React from 'react';
import style from './EventsList.module.css';

function EventsList(): JSX.Element {
  return (
    <div className={style.eventsListContainer} id="eventsList">
      <p className={style.eventsListPlaceholder}>no events available</p>
      {/* events */}
    </div>
  );
}

export default EventsList;
