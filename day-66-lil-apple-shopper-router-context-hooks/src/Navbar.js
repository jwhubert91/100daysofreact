import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar__flexContainer'>
        <Link to='/'>
          <h1>Shopping App</h1>
        </Link>
        <Link to='/cart'>
          <i className='fa fa-shopping-cart'></i>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
