import React, { useContext, useState } from 'react';
import EventsForm from './events-form/EventsForm';
import EventsList from './events-list/EventsList';
import style from './Events.module.css';
import { LanguageContext } from '../../LanguageContext';
import t from './translation';

function Events(): JSX.Element {
  const [showForm, setShowForm] = useState(false);

  const handleFormToggle = (): void => {
    setShowForm(!showForm);
  };

  const { language } = useContext(LanguageContext);

  return (
    <div id="events">
      <div className={style.eventsContainer}>
        <div className={showForm ? `${style.eventsFormContainer} ${style.slideIn}` : `${style.eventsFormContainer} ${style.slideOut}`}>
          {!showForm && (
            <button className={style.eventButton} type="button" onClick={handleFormToggle}>
              {t('addEvent', language)}
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
