import React from 'react'

const LocationInfoBox = ({info}) => {
  return (
    <div className='location-info'>
      <h2>Event Location Info</h2>
      <ul>
        <li>ID: <strong>{info.id}</strong></li>
        <li>Title: <strong>{info.title}</strong></li>
        <li>Coordinates: <strong>{info.lat},{info.long}</strong></li>
      </ul>
    </div>
  )
}

export default LocationInfoBox
