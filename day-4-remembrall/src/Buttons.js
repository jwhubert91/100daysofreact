import React from 'react';

function Buttons(props) {
  return (
    <div className='buttons-container'>
      <button className='clear-button' onClick={() => props.clearMemory()}>
        Clear Memory
      </button>
    </div>
  );
}

export default Buttons;
