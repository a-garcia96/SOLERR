import {elements} from './elements';


export const getInput = () => elements.cityInput.value;

const findNextFiveDays = () => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    const arr1 = daysOfWeek.slice(today.getDay()  + 1);
    const arr2 = daysOfWeek.slice(0, daysOfWeek.indexOf(arr1[0]));
    const nextFiveDays = arr1.concat(arr2);

    if(nextFiveDays.length > 4){
        while(nextFiveDays.length !== 5){
            nextFiveDays.pop();
        }
    }

    return nextFiveDays;
}

const createForecastMarkup = (day, forecastEl, isF) => {
    return `
    <div class="col-md text-center weather__card my-2">
        <h3>${day}</h3>
        <div>
            <img class="weather__icon" src="http://openweathermap.org/img/wn/${forecastEl.main.icon}@2x.png" alt="">
        </div>
        <div>
            <p> HIGH: ${Math.floor(forecastEl.temperature.max)}<sup>°${isF ? 'f' : 'c'}</sup> | LOW: ${Math.floor(forecastEl.temperature.min)}<sup>°${isF ? 'f' : 'c'}</sup> </p>
        </div>
    </div>
    `;
}

export const renderFiveDayForecast = (forecastArray, isF = true) => {
    findNextFiveDays().forEach((day, index) => {
        elements.forecastSection.insertAdjacentHTML('beforeend', createForecastMarkup(day, forecastArray[index], isF));
    });
}

export const clearForecast = () => {
    elements.forecastSection.innerHTML = '';
}