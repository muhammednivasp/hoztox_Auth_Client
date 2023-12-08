import React, { useEffect, useState } from 'react';
import './Events.css';
import { eventGet } from '../../../services/UserApi';
import ReactPlayer from 'react-player';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [events, setEvents] = useState([]);
  const [stream, setStream] = useState(false);
  const [url, setUrl] = useState('');

  useEffect(() => {
    eventGet()
      .then((datas) => {
        console.log(datas, 'jjjj');
        setEvents(datas.data.Events);
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

  const closeEventDetails = () => {
    setStream(false);
    setSelectedEvent(null);
  };

  const handleStartEvent = (url) => {
    setUrl(url);
    closeEventDetails();
    setStream(true);
  };

  return (
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
            <p>
              {timesetter(event.eventDateTime.toLocaleString()).formattedDate},{' '}
              {timesetter(event.eventDateTime.toLocaleString()).formattedTime}
            </p>
          </div>
        ))}

        {selectedEvent && (
          <div className='event-modal'>
            <div className='modal-content'>
              <span className='close' onClick={closeEventDetails}>
                &times;
              </span>
              <h2 style={{ color: 'blue' }}>{selectedEvent.eventName}</h2>
              <p>
                Date and Time:{' '}
                {timesetter(selectedEvent.eventDateTime.toLocaleString()).formattedDate},{' '}
                {timesetter(selectedEvent.eventDateTime.toLocaleString()).formattedTime}
              </p>
              <div>
                <label>Description: </label>
                <p className='description'>{selectedEvent.eventDescription}</p>
              </div>
              {isEventInPast(selectedEvent.eventDateTime.toLocaleString()) && (
                <button onClick={() => handleStartEvent(selectedEvent.eventUrl)}>
                  Start Event
                </button>
              )}
            </div>
          </div>
        )}
        {stream && (
          <div className='video-modal'>
            <ReactPlayer
              controls
              url={url}
              width='60%'
              height='60%'
              style={{ borderRadius: '5px' }}
              playing={true}
            />
            <button className='close-video' onClick={closeEventDetails}>
              Close Video
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
