import { mapboxAPIKey, weatherAPIKey } from './keys.js';

const DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

function roundNumber(floatNum) {
  return Math.floor(floatNum);
}

function convertString(inputString) {
  const wordsSpaced = inputString.split(' ').map((word) => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  });
  const formattedString = wordsSpaced.join(' ');
  const resultsObj = {
    formattedString,
    urlString: encodeURI(formattedString),
  };
  return resultsObj;
}

function getDate(diffFromToday) {
  const today = new Date();
  const day = new Date(today);
  day.setDate(day.getDate() + diffFromToday);
  return DAYS[day.getDay()];
}

async function fetchWeather(lat, long) {
  let promise = fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely,hourly,alerts&units=imperial&appid=${weatherAPIKey}`
  ).then((response) => response.json());
  let promiseData = await promise;
  const weatherArr = [
    {
      day: 0,
      dayOfWeek: getDate(0),
      iconId: promiseData.current.weather[0].icon,
      temp: roundNumber(promiseData.current.temp),
      weather: promiseData.current.weather[0].main,
    },
  ];
  for (let i = 0; i <= 3; i++) {
    const dayInt = i + 1;
    weatherArr.push({
      day: dayInt,
      dayOfWeek: getDate(dayInt),
      iconId: promiseData.daily[i].weather[0].icon,
      temp: roundNumber(promiseData.daily[i].temp.day),
      weather: promiseData.daily[i].weather[0].main,
    });
  }
  console.log(weatherArr);
  return weatherArr;
}

export default async function fetchData(input) {
  const locationString = convertString(input);
  const { formattedString, urlString } = locationString;
  let geoPromise = fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${urlString}.json?access_token=${mapboxAPIKey}`
  ).then((response) => response.json());
  let promiseData = await geoPromise;
  if (promiseData.features.length === 0) return false;
  const lat = promiseData.features[0].center[1];
  const long = promiseData.features[0].center[0];
  const weatherArray = await fetchWeather(lat, long);
  weatherArray['cityName'] = formattedString;
  return weatherArray;
}
