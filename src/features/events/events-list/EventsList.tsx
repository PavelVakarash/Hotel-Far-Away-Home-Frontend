import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../store';
import { loadEvents } from '../eventsSlice';
import { selectEvents } from '../selectors';
import style from './EventsList.module.css';
import Event from '../types/Event';
import { LanguageContext } from '../../../LanguageContext';
import t from '../translation';

function EventsList(): JSX.Element {
  const dispatch = useAppDispatch();
  const events = useSelector(selectEvents);
  const [imageURLs, setImageURLs] = useState<{ [eventId: number]: string }>({});

  const { language } = useContext(LanguageContext);

  useEffect(() => {
    dispatch(loadEvents());
  }, [dispatch]);

  useEffect(() => {
    events?.forEach((event: Event) => {
      const reader = new FileReader();
      reader.onload = () => {
        setImageURLs((prevURLs) => ({
          ...prevURLs,
          [event.id]: reader.result as string,
        }));
      };
      reader.readAsDataURL(event.file);
    });
  }, [events]);

  return (
    <div className={style.eventsListContainer} id="eventsList">
      {events && events.length === 0 ? (
        <p className={style.eventsListPlaceholder}>{t('Events', language)}</p>
      ) : (
        events?.map((event: Event) => (
          <div key={event.id}>
            <p>{event.title}</p>
            <p>{event.author}</p>
            {imageURLs[event.id] && (
              <img src={imageURLs[event.id]} alt="" />
            )}
            <p>{event.text}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default EventsList;
