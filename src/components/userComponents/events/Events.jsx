import React, { useEffect, useState } from 'react';
import './Events.css';

import { eventGet } from '../../../services/UserApi';
import EventModal from './EventModal';
import Loader from '../../loader/Loader';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [events, setEvents] = useState([]);
  const [loader, setLoader] = useState(true);


  useEffect(() => {
    eventGet()
      .then((datas) => {
        setEvents(datas?.data?.Events);
        setLoader(false)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const timesetter = (schedule) => {
    const eventDate = new Date(schedule);

    // Format date
    const optionsDate = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    const formattedDate = eventDate.toLocaleDateString('en-IN', optionsDate);

    // Format time
    const optionsTime = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true, // Use 12-hour clock
    };
    const formattedTime = eventDate.toLocaleTimeString('en-IN', optionsTime);

    return { formattedDate, formattedTime };
  };

  const isEventInPast = (dateTime) => {
    const currentDateTime = new Date();
    const eventDateTime = new Date(dateTime);
    return eventDateTime < currentDateTime;
  };

  const openEventDetails = (event) => {
    setSelectedEvent(event);
  };

  
  return (
    <>
    {loader?<Loader/> : (
    <div className='event-top'>
      <h2 style={{ color: 'white' }}>Events</h2>
      <div className='event-list'>
        {events.map((event) => (
          <div
            key={event.id}
            className='event-bar'
            onClick={() => openEventDetails(event)}
          >
            <h3>{event.eventName}</h3>
            {isEventInPast(event.eventDateTime.toLocaleString()) ? (
              <p style={{ color: 'red' }}>
                {timesetter(event.eventDateTime.toLocaleString()).formattedDate},{' '}
                {timesetter(event.eventDateTime.toLocaleString()).formattedTime}  {'('}<span style={{ color: 'blue' }}>{'ongoing'}</span>{')'}
              </p>
            ) : (
              <p>
                {timesetter(event.eventDateTime.toLocaleString()).formattedDate},{' '}
                {timesetter(event.eventDateTime.toLocaleString()).formattedTime}
              </p>
            )}

          </div>
        ))}

        {selectedEvent && (
          <EventModal selectedEvent={selectedEvent} timesetter={timesetter} setSelectedEvent={openEventDetails} isEventInPast={isEventInPast} />
        )}

      </div>
    </div>
  )}
  </>
  );
};

export default Events;
