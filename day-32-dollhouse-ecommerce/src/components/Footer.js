import React from 'react';
import Logo from './Logo';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <Logo />
      <p className='footer-links'>
        <a href='https://www.instagram.com/dolces_dollhouse/'>
          <i className='fa fa-instagram'></i>
        </a>
        <a href='#app-container'>
          <i className='fa fa-whatsapp'></i>
        </a>
        {/* <a href=''>
          <i className='fa fa-facebook'></i>
        </a> */}
      </p>
    </footer>
  );
}

export default Footer;
