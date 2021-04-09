/* eslint-disable no-underscore-dangle */
import config from '../config';

const Model = (() => {
  const _weather = {
    coord: {
      lon: 0,
      lat: 0,
    },
    weather: {
      main: '',
      description: '',
    },
    wind: {
      speed: 0,
      direction: 0,
    },
    temperature: {
      temperature: 0,
      feelsLike: 0,
    },
  };

  let _location = '';
  let _scale = 'F';
  const getWeather = () => _weather;

  const setWeather = async (location) => {
    _location = location;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${_location}&appid=${config.OPENWEATHERMAP_API_TOKEN}`);
    const data = await response.json();

    _weather.coord.lon = data.coord.lon;
    _weather.coord.lat = data.coord.lat;
    _weather.weather.description = data.weather[0].main;
    _weather.weather.main = data.weather[0].main;
    _weather.wind.speed = data.wind.speed;
    _weather.wind.direction = data.wind.deg;
    _weather.temperature.temperature = data.main.temp;
    _weather.temperature.feelsLike = data.main.feels_like;

    console.log(data);
  };

  const getScale = () => _scale;

  const setScale = (scale) => {
    if (scale === 'C' || scale === 'F') {
      _scale = scale;
    } else {
      throw new Error('Scale not accepted');
    }
  };

  const getTemperature = () => {
    if (_scale === 'C') {
      return Math.round(_weather.temperature.temperature - 273.15);
    }
    return Math.round((_weather.temperature.temperature - 273.15) * 9 / 5 + 32);
  };

  return {
    getWeather,
    setWeather,
    getScale,
    setScale,
    getTemperature,
  };
})();

export { Model };
