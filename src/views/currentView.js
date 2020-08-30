import { elements } from './elements';
import moment from 'moment';

const markup = (searchObj) => {

return `

<div id="current__weather" class="text-center text-md-left">
    <div id="current__text">
        <h2>${searchObj.name}</h2>
        <h3>${moment().format('dddd')}</h3>
        <h4>${searchObj.weather[0].main}</h4>
    </div>
    <img id="weather__icon" src="http://openweathermap.org/img/wn/${searchObj.weather[0].icon}@2x.png" alt="">
    <p>HIGH: ${Math.floor(searchObj.main.temp_max)}<sup>°F</sup> | LOW: ${Math.floor(searchObj.main.temp_min)}<sup>°F</sup></p>
</div>
`
};

export const renderCurrentView = (currentWeatherDataObj) => {
    elements.currentWeatherSection.insertAdjacentHTML('afterbegin', markup(currentWeatherDataObj))
}

export const clearCurrentView = () => {
    elements.currentWeatherSection.innerHTML = '';
}