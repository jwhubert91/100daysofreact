import React from 'react';
import ForecastDay from './ForecastDay';

function Today(props) {
  const { weatherObj } = props;
  const todayArray = Object.keys(weatherObj);
  const receivedData = todayArray.length > 0;
  const mainImageUrl = receivedData
    ? `http://openweathermap.org/img/wn/${weatherObj[0].iconId}@4x.png`
    : `http://openweathermap.org/img/wn/10d@4x.png`;
  const forecastComponents = !receivedData
    ? ''
    : [1, 2, 3, 4].map((idx) => (
        <ForecastDay
          key={idx}
          weekday={weatherObj[idx].dayOfWeek}
          forecastIconId={weatherObj[idx].iconId}
          forecastTemp={weatherObj[idx].temp}
        />
      ));
  return (
    <div className='main-container'>
      <div className='today-container'>
        <div className='info-container'>
          <div className='image-container'>
            <img
              src={mainImageUrl}
              alt='today weather'
              className='today-image'
            />
          </div>
          <div className='text-info-container'>
            <p className='today-header'>Today</p>
            <h1 className='city-name'>
              {weatherObj.cityName ? weatherObj.cityName : '--'}
            </h1>
            <p className='temp-text-today'>
              Temperature: {receivedData && weatherObj[0].temp}&deg; F
            </p>
            <p className='weather-text'>
              {receivedData && weatherObj[0].weather}
            </p>
          </div>
        </div>
      </div>
      <div className='forecast-container'>{forecastComponents}</div>
    </div>
  );
}

export default Today;
