import React from 'react';
import Unicorn from './Unicorn';
import animation from '../animations/6261-unicorn.json';
import './Loading.css';

function Loading() {
  return (
    <div className='loading-screen'>
      <Unicorn lotti={animation} height={300} width={300} />
    </div>
  );
}

export default Loading;
