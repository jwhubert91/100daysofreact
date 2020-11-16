import React from 'react';

function ForecastDay(props) {
  const { weekday, forecastIconId, forecastTemp } = props;
  const imageUrl = `http://openweathermap.org/img/wn/${forecastIconId}.png`;
  return (
    <div className='forecast-day'>
      <p className='weekday'>{weekday}</p>
      <img
        src={imageUrl}
        alt='weather-forecast'
        className='daily-weather-image'
      />
      <p className='daily-temp'>{forecastTemp}&deg;F</p>
    </div>
  );
}

export default ForecastDay;
