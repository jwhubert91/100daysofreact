import React, { useState } from 'react';
import { fetchWeather } from './api/fetchWeather';
import './App.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const search = async (e) => {
    if (e.key === 'Enter' && query.length > 0) {
      console.log('Initializing search from App.js with search: ', query);
      const data = await fetchWeather(query);
      setWeather({ ...data });
      setQuery('');
    }
  };

  return (
    <div className='main-container'>
      <input
        type='text'
        className='search'
        placeholder='Search...'
        value={query}
        onChange={handleInputChange}
        onKeyPress={search}
      />
      {weather.main && (
        <div className='city'>
          <h2 className='city-name'>
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className='city-temp'>
            {Math.round(weather.main.temp)}
            <sup>&deg; F</sup>
          </div>
          <div className='info'>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
              className='city-icon'
            />
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
