import Search from './models/Search';
import * as forecastView from './views/forecastView';
import {elements} from './views/elements';
import * as currentView from './views/currentView';

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
        await search();
        currentView.renderCurrentView(state.search.currentWeatherData);
        forecastView.renderFiveDayForecast(state.search.weatherForecast);

        console.log(state.search.currentWeatherData);
    }
});


const load = () => {
    const height = window.screen.height;
    const width = window.screen.width;
    console.log(`screen specs: The height is: ${height} and the width is: ${width}`);
}

window.onload = load;