import React from 'react'
import Icon from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire'

const Header = () => {
  return (
    <header className='header'>
      <h1><Icon icon={locationIcon} />NASA Wildfire Tracker</h1>
      <p>Built by <a href='https://twitter.com/jwhubert91'>@jwhubert91</a> inspired by Traversy Media</p>
      <span className='header-data'>
        <a href='https://eonet.sci.gsfc.nasa.gov/docs/v2.1#eventsAPI'>Data</a>
      </span>
    </header>
  )
}

export default Header
