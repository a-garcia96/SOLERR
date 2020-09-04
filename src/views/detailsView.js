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
        <button type="button" class="is__active mr-1 btn btn-primary">°F</button>
        <button type="button" class="inactive ml-1 btn btn-secondary">°C</button>
    ` 
}

export const changeViewToF = () => {
    const activeBtn = document.querySelector('.is__active');
    const inactiveBtn = document.querySelector('.inactive');
    
    activeBtn.classList.remove('is__active');
    inactiveBtn.classList.add('is__active');
}

export const renderWeatherDetails = (searchObj) => {
    elements.weatherDetails.insertAdjacentHTML('afterbegin', markup(searchObj));
};

export const clearWeatherDetails = () => {
    elements.weatherDetails.innerHTML = ' ';
}