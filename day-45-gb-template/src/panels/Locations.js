import React from 'react'
import ResponsiveCTAs from '../components/ResponsiveCTAs';
import './styles/Locations.css';

function Locations(props) {

  const locationItems = props.locationsData.map((location,idx) => (
    <div className='location-item' key={'location-'+idx}>
      <h5 className='location-subtitle'>{location.locationName}</h5>
      <div className='location-text address-text'>
        {location.locationAddressArray.map((line,idx) => (
          <p key={'address_line_'+idx}>{line}</p>
        ))}
      </div>
      <div className='location-image'>
        <img src={location.locationImageURL} />
      </div>
      <h5 className='location-subtitle hours-subtitle'>Hours</h5>
      <div className='location-text'>
        {location.locationHoursArray.map((line,idx) => (
          <p key={'hours_line_'+idx}>{line}</p>
        ))}
      </div>
    </div>
  ))

  return (
    <div className='full-height location-panel'>
      <h3 className='section-header' id='Locations'>{props.locationSectionHeader}</h3>
      <p className='section-header-subtitle'>{props.locationSectionSubheader}</p>
      <div className='location-content-container'>
        {locationItems}
      </div>
      <ResponsiveCTAs />
    </div>
  )
}

export default Locations
