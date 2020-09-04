import Search from './models/Search';
import * as forecastView from './views/forecastView';
import {elements} from './views/elements';
import * as currentView from './views/currentView';
import * as detailsView from './views/detailsView';
import * as utilities from './models/Convert';

const state = {};

//SEARCH FUNCTION
const search = async () => {
    const query = forecastView.getInput();

    if(query){
        state.search = new Search(query);

        try{
            await state.search.getWeather();
            await state.search.getForecast();
        } catch (error) {
            alert(`${error}: Could not find city please try another!`)
        }
    }
}

// EVENT LISTENER TO TRIGGER SEARCH
elements.searchForm.addEventListener('click', async e => {
    e.preventDefault();
    if(e.target.matches('[type="submit"]')){
        forecastView.clearForecast();
        currentView.clearCurrentView();
        detailsView.clearWeatherDetails();
        await search();
        currentView.renderCurrentView(state.search.currentWeatherData);
        forecastView.renderFiveDayForecast(state.search.weatherForecast);
        detailsView.renderWeatherDetails(state.search.currentWeatherData);

        console.log(state);
    }
});

// EVENT LISTENERS TO TRIGGER CONVERTING UNITS TO C/F
elements.weatherDetails.addEventListener('click', (e) => {
    const activeBtn = e.target.closest('.is__active');
    const inactiveBtn = e.target.closest('.inactive');

    if(inactiveBtn){
        detailsView.changeViewToF();
    }
});