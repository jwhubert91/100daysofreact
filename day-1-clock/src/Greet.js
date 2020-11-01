import React from 'react';

function Greet() {
  let timeOfDayColor;
  const dateTime = new Date();
  const hours = dateTime.getHours();
  let timeOfDay;
  if (hours < 2 || hours > 17) {
    timeOfDay = 'Evening';
    timeOfDayColor = 'purple';
  } else if (hours > 12) {
    timeOfDay = 'Afternoon';
    timeOfDayColor = 'yellow';
  } else {
    timeOfDay = 'Morning';
    timeOfDayColor = 'turquoise';
  }
  const timeOfDayStyle = {
    color: timeOfDayColor,
  };
  return (
    <div className='greetingContainer'>
      <p>
        Good <span style={timeOfDayStyle}>{timeOfDay}</span>
      </p>
    </div>
  );
}

export default Greet;
