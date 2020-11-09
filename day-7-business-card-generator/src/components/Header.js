import React from 'react';

function Header() {
  return (
    <div className='header-container'>
      <ul>
        <li className='header-logo'>
          <img src='business_card.png' alt='business card logo' />
          <span className='header-logo-title'>
            React Business Card Generator
          </span>
        </li>
        <li className='header-attribution'>
          <a href='https://www.twitter.com/jwhubert91' className='twitter-link'>
            <i className='fa fa-twitter' />
          </a>
        </li>
        <li className='header-attribution'>
          <a href='https://www.github.com/jwhubert91' className='github-link'>
            <i className='fa fa-github' />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
