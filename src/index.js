/* eslint-disable no-console */
import './style.css';
import config from './config';
import { View } from './modules/view';

View.renderDocument();

async function getWeather(location) {
  const info = document.getElementById('info');
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${config.OPENWEATHERMAP_API_TOKEN}`);
  const data = await response.json();
  info.textContent = JSON.stringify(data);
  console.log(data);
}

getWeather('columbus');
