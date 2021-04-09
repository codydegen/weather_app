/* eslint-disable no-console */
import './style.css';
import { View } from './modules/view';
import { Model } from './modules/model';

View.renderDocument();

const submit = document.getElementById('submit');
const input = document.getElementById('input');

submit.addEventListener('click', (e) => {
  e.preventDefault();
  Model.setWeather(input.value).then(() => {
    View.renderWeather(Model.getWeather());
    console.log(Model.getTemperature());
  });
});
