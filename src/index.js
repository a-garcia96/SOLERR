import Search from './models/Search';
import * as forecastView from './views/forecastView';
import { elements } from './views/elements';
import * as currentView from './views/currentView';
import * as detailsView from './views/detailsView';
import * as utilities from './models/Convert';

const state = {};

//SEARCH FUNCTION
const search = async () => {
    const query = forecastView.getInput();

    if (query) {
        state.search = new Search(query);

        try {
            await state.search.getWeather();
            await state.search.getForecast();
        } catch (error) {
            alert(`${error}: Could not find city please try another!`)
        }
    }

    forecastView.clearInput();
}

const renderAll = async () => {
    forecastView.clearForecast();
    currentView.clearCurrentView();
    detailsView.clearWeatherDetails();
    await search();
    currentView.renderCurrentView(state.search.currentWeatherData);
    forecastView.renderFiveDayForecast(state.search.weatherForecast);
    detailsView.renderWeatherDetails(state.search.currentWeatherData);
}

// EVENT LISTENER TO TRIGGER SEARCH
elements.searchForm.addEventListener('keyup', e => {
    if (e.keyCode == 13) {
        renderAll();
        console.log(state);
    }
});

elements.submitBtn.addEventListener('click', renderAll);

// EVENT LISTENERS TO TRIGGER CONVERTING UNITS TO C/F
elements.weatherDetails.addEventListener('click', (e) => {
    const measurement = e.target.dataset.measurement;

    if (measurement == 'c' && state.search.isFahrenheit) {
        detailsView.changeViewToC();
        utilities.convertToC(state.search.currentWeatherData, state.search.weatherForecast, state.search);
        forecastView.clearForecast();
        currentView.clearCurrentView();
        currentView.renderCurrentView(state.search.currentWeatherData, state.search.isFahrenheit);
        forecastView.renderFiveDayForecast(state.search.weatherForecast, state.search.isFahrenheit);
    } else if (measurement == 'f' && !state.search.isFahrenheit) {
        detailsView.changeViewToF();
        utilities.convertToF(state.search.currentWeatherData, state.search.weatherForecast, state.search);
        forecastView.clearForecast();
        currentView.clearCurrentView();
        currentView.renderCurrentView(state.search.currentWeatherData, state.search.isFahrenheit);
        forecastView.renderFiveDayForecast(state.search.weatherForecast, state.search.isFahrenheit);
    }
});