/* eslint-disable no-console */
import './style.css';
import { View } from './modules/view';
import { Model } from './modules/model';

View.renderDocument();

Model.setWeather('Columbus')
  .then(() => {
    View.renderWeather(Model.getWeather());
    console.log(Model.getTemperature());
  });
