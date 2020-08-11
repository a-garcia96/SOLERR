import Search from './models/Search';
import * as searchView from './views/searchView';
import {elements} from './views/elements';

const state = {};

//SEARCH FUNCTION

const search = async () => {
    const query = searchView.getInput();

    if(query){
        state.search = new Search(query);

        try{
            await state.search.getWeather();
            await state.search.getForecast();
        } catch (error) {
            alert(`${error}: Could not find city please try another!`)
        }

        console.log(state);
    }
}

// EVENT LISTENER TO TRIGGER SEARCH

elements.searchForm.addEventListener('click', async e => {
    e.preventDefault();
    if(e.target.matches('[type="submit"]')){
        await search();
        searchView.renderFiveDayForecast(state.search.weatherForecast);
    }
});
