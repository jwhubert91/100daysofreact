import React from 'react';
import Unicorn from './Unicorn';
import animation from '../animations/6261-unicorn.json';
import './Loading.css';

function Loading() {
  const windowWidth = window.innerWidth;
  const unicornLogoSize = windowWidth < 550 ? 150 : 300;

  return (
    <div className='loading-screen'>
      <Unicorn
        lotti={animation}
        height={unicornLogoSize}
        width={unicornLogoSize}
      />
    </div>
  );
}

export default Loading;
