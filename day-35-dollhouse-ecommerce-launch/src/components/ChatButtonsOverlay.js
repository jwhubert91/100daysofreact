import React from 'react';
import './ChatButtonsOverlay.css';

function ChatButtonsOverlay() {
  return (
    <div className='chat-buttons-overlay-container'>
      {/* <a
        href='https://chat.whatsapp.com/LZbSBrWxQJYCKvR0kvgeKt'
        className='whatsapp-order-button'
      >
        <span className='whatsapp-order-text'>Ordena Ahora</span>{' '}
        <i className='fa fa-whatsapp'></i>
      </a> */}
      <a href='#app-container' className='whatsapp-order-button'>
        <span className='whatsapp-order-text'>Ordena Ahora</span>{' '}
        <i className='fa fa-whatsapp'></i>
      </a>
      <a href='#app-container'>
        <i className='fa fa-arrow up'></i>
      </a>
    </div>
  );
}

export default ChatButtonsOverlay;
