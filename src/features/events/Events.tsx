import React, { useState } from 'react';
import EventsForm from './events-form/EventsForm';
import EventsList from './events-list/EventsList';
import style from './Events.module.css';

function Events(): JSX.Element {
  const [showForm, setShowForm] = useState(false);

  const handleFormToggle = (): void => {
    setShowForm(!showForm);
  };

  return (
    <div id="events">
      <div className={style.eventsContainer}>
        <div className={showForm ? `${style.eventsFormContainer} ${style.slideIn}` : `${style.eventsFormContainer} ${style.slideOut}`}>
          {!showForm && (
            <button className={style.eventButton} type="button" onClick={handleFormToggle}>
              ADD YOUR EVENT
            </button>
          )}
          {showForm && <EventsForm onClose={handleFormToggle} />}
        </div>
        <div className={style.listContainer}><EventsList /></div>
      </div>
    </div>
  );
}

export default Events;
