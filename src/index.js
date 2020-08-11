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

        console.log(state.search);
    }
}

// EVENT LISTENER TO TRIGGER SEARCH

elements.searchForm.addEventListener('click', e => {
    e.preventDefault();
    if(e.target.matches('[type="submit"]')){
        search();
        searchView.renderFiveDayForecast();
    }
});
