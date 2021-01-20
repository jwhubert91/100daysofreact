import React from 'react';
import Logo from './Logo';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <Logo />
      {/* <p className='footer-links'>
        <a href='https://www.instagram.com/dolces_dollhouse/'>
          <i className='fa fa-instagram'></i>
        </a>
        <a href='https://chat.whatsapp.com/LZbSBrWxQJYCKvR0kvgeKt'>
          <i className='fa fa-whatsapp'></i>
        </a>
      </p> */}
      <p className='footer-links'>
        <a href='#app-container'>
          <i className='fa fa-instagram'></i>
        </a>
        <a href='#app-container'>
          <i className='fa fa-whatsapp'></i>
        </a>
      </p>
    </footer>
  );
}

export default Footer;
