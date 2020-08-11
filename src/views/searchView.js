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

const createForecastMarkup = (day, forecast) => {
    return `
    <div class="two columns weather__card">
        <h3>${day}</h3>
        <div>
            <img class="weather__icon" src="./img/weatherIcons/sun.svg" alt="Sunny">
        </div>
        <div>
            <p> HIGH: 80 | LOW: 70 </p>
        </div>
    </div>
    `;
}

export const renderFiveDayForecast = () => {
    console.log(findNextFiveDays());
    findNextFiveDays().forEach(day => {
        console.log(day);
        elements.forecastSection.insertAdjacentHTML('beforeend', createForecastMarkup(day));
    });
}