import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className='navbar'>
      <ul className='nav-items-left'>
        <li>
          <strong>Only Fans</strong>
        </li>
      </ul>
      <ul className='nav-items-right'>
        <li>Shop</li>
        <li>Read</li>
        <li>Account</li>
        <li>
          <i className='fa fa-shopping-cart'></i>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
