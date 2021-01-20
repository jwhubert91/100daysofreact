import React from 'react';
import './Logo.css';
import dollhouseLogoPng from '../images/dollhouse_png_optimized.png';

function Logo() {
  return (
    <span className='logo-text'>
      <img src={dollhouseLogoPng} alt='logo' />
    </span>
  );
}

export default Logo;
