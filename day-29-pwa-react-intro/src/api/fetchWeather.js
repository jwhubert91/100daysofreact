const API_KEY = 'a5955c0430a648d2b002f4e1d47b143f';

export const fetchWeather = async (query) => {
  console.log('Initializing fetch in fetchWeather.js');
  let promise = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=imperial&appid=${API_KEY}`
  ).then((response) => response.json());
  return await promise;
};
