import CurrentWeather from './models/CurrentWeatherModel';

const currentWeather = new CurrentWeather('It is currently 30 degrees celsius');

window.addEventListener('load', currentWeather.printString);