import React from 'react'
import './styles/GlobalNavbar.css';

function GlobalNavbar(props) {

  // const authPrompt = props.userSignedIn ? 'Sign Out' : 'Log In';

  return (
    <nav className='global-navbar-container'>
      🛍️ Compras
      {/* <span className='navbar-auth-prompt' onClick={handleAuthClick}>{authPrompt}</span> */}
    </nav>
  )
}

export default GlobalNavbar
