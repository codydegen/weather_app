/* eslint-disable no-console */
import './style.css';
import { View } from './modules/view';
import { Model } from './modules/model';

View.renderDocument();

const form = document.getElementById('form');
const input = document.getElementById('input');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  Model.setWeather(input.value).then(() => {
    View.renderWeather(Model.getWeather());
    console.log(Model.getTemperature());
  });
});

