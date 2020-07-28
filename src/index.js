import Search from './models/Search';
import * as searchView from './views/searchView';
import {elements} from './views/elements';

const state = {};


const search = async () => {
    const query = searchView.getInput();

    if(query){
        console.log(query);
        state.search = new Search(query);

        try{
            await state.search.getWeather();
        } catch (error) {
            alert(`${error}: Could not find city please try another!`)
        }

        console.log(state.search.data.main);
    }
}

elements.searchForm.addEventListener('click', e => {
    e.preventDefault();
    if(e.target.matches('[type="submit"]')){
        search();
    }
});
