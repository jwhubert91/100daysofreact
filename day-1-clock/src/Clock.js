import React from 'react';
import moment from 'moment';

function Clock() {
  return (
    <div className='clockContainer'>
      <div className='timeContainer'>
        {moment().format('dddd, MMMM Do YYYY, h:mm:ss a')}
      </div>
    </div>
  );
}

export default Clock;
