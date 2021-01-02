import React from 'react';
import './Header.css';
import colabLogo from '../logo-circle.svg';

function Header() {
  return (
    <header>
      <img src={colabLogo} className='header-logo' alt='logo' />
    </header>
  );
}

export default Header;
