import React, { useState } from 'react'
import './Events.css'
import Stream from './Stream';

function EventModal({ selectedEvent, timesetter, setSelectedEvent, isEventInPast }) {
  const [stream, setStream] = useState(false);
  const [url, setUrl] = useState('');


  const closeEventDetails = () => {
    setStream(false);
    setSelectedEvent(null);
  };

  const handleStartEvent = (url) => {
    setUrl(url);
    setStream(true);
  };

  return (
    <>
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
      {stream && (
        <Stream closeEventDetails={closeEventDetails} url={url} />
      )}
    </>
  )
}

export default EventModal