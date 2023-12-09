import React from 'react'
import './Events.css'
import ReactPlayer from 'react-player';


function Stream({ closeEventDetails, url }) {

  return (
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
  )
}

export default Stream