/* eslint-disable no-console */
import './style.css';
import config from './config';

async function getWeather(location) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${config.OPENWEATHERMAP_API_TOKEN}`);
  const data = await response.json();
  console.log(data);
}
getWeather('columbus');
