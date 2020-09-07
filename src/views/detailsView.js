import {elements} from './elements';

// WEATHER DETAILS TO INCLUDE
// 1. Humidity
// 2. Wind Speeds
// 3. Farenheit to Celsius Conversion button


const markup = (searchObj) => {
    return `
        <h2>Weather Details</h2>
        <h3>Humidity: ${searchObj.main.humidity}%</h3>
        <h3>Wind Speeds: ${Math.ceil(searchObj.wind.speed)} Mph</h3>
        <button type="button" class="is__active mr-1 btn btn-primary" data-measurement="f">°F</button>
        <button type="button" class="inactive ml-1 btn btn-secondary" data-measurement="c">°C</button>
    ` 
}

export const changeViewToF = () => {
    const activeBtn = document.querySelector('[data-measurement="c"]');
    const inactiveBtn = document.querySelector('[data-measurement="f"]');
    
    activeBtn.classList.remove('is__active');
    activeBtn.classList.add('inactive');

    inactiveBtn.classList.remove('inactive');
    inactiveBtn.classList.add('is__active');
}

export const changeViewToC = () => {
    const activeBtn = document.querySelector('[data-measurement="f"]');
    const inactiveBtn = document.querySelector('[data-measurement="c"]');

    activeBtn.classList.remove('is__active');
    activeBtn.classList.add('inactive');

    inactiveBtn.classList.remove('inactive');
    inactiveBtn.classList.add('is__active');
}

export const renderWeatherDetails = (searchObj) => {
    elements.weatherDetails.insertAdjacentHTML('afterbegin', markup(searchObj));
};

export const clearWeatherDetails = () => {
    elements.weatherDetails.innerHTML = '';
}