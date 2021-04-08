/* eslint-disable no-console */
import config from "./config.js";

async function getWeather(location) {
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Columbus&appid=${config.OPENWEATHERMAP_API_TOKEN}`);
  const data = await response.json();
  console.log(data);
}
getWeather('columbus');
