import React from 'react';

function Greet() {
  const dateTime = new Date();
  const hours = dateTime.getHours();
  let timeOfDay;
  switch (hours) {
    case hours > 17 || hours < 1:
      timeOfDay = 'Evening';
      break;
    case hours > 12:
      timeOfDay = 'Afternoon';
      break;
    default:
      timeOfDay = 'Morning';
  }
  return (
    <div className='greetingContainer'>
      <p>Good {timeOfDay}</p>
    </div>
  );
}

export default Greet;
